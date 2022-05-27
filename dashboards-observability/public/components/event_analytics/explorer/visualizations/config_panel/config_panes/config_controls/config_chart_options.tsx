/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useCallback } from 'react';
import { EuiAccordion, EuiSpacer, EuiForm } from '@elastic/eui';
import { PanelItem } from './config_panel_item';

export const ConfigChartOptions = ({
  visualizations,
  schemas,
  vizState,
  handleConfigChange,
}: any) => {
  const { data } = visualizations;
  const { data: vizData = {}, metadata: { fields = [] } = {} } = data?.rawVizData;
  const handleConfigurationChange = useCallback(
    (stateFiledName) => {
      return (changes) => {
        handleConfigChange({
          ...vizState,
          [stateFiledName]: changes,
        });
      };
    },
    [handleConfigChange, vizState]
  );

  const currentSchemas = useMemo(() => {
    if (vizState.colorMode === undefined || vizState.colorMode[0].name === 'spectrum') {
      return schemas.filter((schema) => schema.mapTo !== 'color');
    }
    if (vizState.colorMode && vizState.colorMode[0].name === 'opacity') {
      return schemas.filter((schema) => schema.mapTo !== 'scheme');
    }
  }, [vizState]);

  const dimensions = useMemo(() => {
    return (
      currentSchemas &&
      currentSchemas.map((schema, index) => {
        let params = {};
        const DimensionComponent = schema.component || PanelItem;
        if (schema.eleType === 'palettePicker') {
          params = {
            title: schema.name,
            colorPalettes: schema.options || [],
            selectedColor: vizState[schema.mapTo] || schema.defaultState,
            onSelectChange: handleConfigurationChange(schema.mapTo),
            vizState,
            ...schema.props,
          };
        } else if (schema.eleType === 'singleColorPicker') {
          params = {
            title: schema.name,
            selectedColor: vizState[schema.mapTo] || schema.defaultState,
            onSelectChange: handleConfigurationChange(schema.mapTo),
            vizState,
            ...schema.props,
          };
        } else {
          params = {
            paddingTitle: schema.name,
            advancedTitle: 'advancedTitle',
            dropdownList:
              schema?.options?.map((option) => ({ ...option })) ||
              fields.map((item) => ({ ...item })),
            onSelectChange: handleConfigurationChange(schema.mapTo),
            isSingleSelection: schema.isSingleSelection,
            selectedAxis: vizState[schema.mapTo] || schema.defaultState,
            vizState,
            ...schema.props,
          };
        }
        return (
          <>
            <EuiForm component="form">
              <DimensionComponent key={`viz-series-${index}`} {...params} />
              <EuiSpacer size="s" />
            </EuiForm>
          </>
        );
      })
    );
  }, [currentSchemas, vizState, handleConfigurationChange]);

  return (
    <EuiAccordion
      initialIsOpen
      id="configPanel__chartStyles"
      buttonContent="Chart Styles"
      paddingSize="s"
    >
      {dimensions}
    </EuiAccordion>
  );
};
