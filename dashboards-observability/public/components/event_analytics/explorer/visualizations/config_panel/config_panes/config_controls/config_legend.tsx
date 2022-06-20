/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useMemo } from 'react';
import { EuiAccordion, EuiSpacer } from '@elastic/eui';
import { ButtonGroupItem } from './config_button_group';
<<<<<<< HEAD

export const ConfigLegend = ({ schemas, vizState, handleConfigChange }) => {
=======
import { IConfigPanelOptionSection } from '../../../../../../../../common/types/explorer';

export const ConfigLegend = ({ schemas, vizState, handleConfigChange }: any) => {
>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
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

<<<<<<< HEAD
  const [showLegendGroup, positionGroup] = schemas;

  const dimensions = useMemo(() => {
    return [showLegendGroup, positionGroup].map((schema, index) => {
=======
  const dimensions = useMemo(() => {
    return schemas.map((schema: IConfigPanelOptionSection, index: number) => {
>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
      const DimensionComponent = schema.component || ButtonGroupItem;
      const params = {
        title: schema.name,
        legend: schema.name,
<<<<<<< HEAD
        groupOptions: schema?.props?.options.map((btn: { name: string, modeId: string }) => ({ id: btn.modeId, label: btn.name })),
        idSelected: vizState[schema.mapTo] || schema?.props?.defaultSelections[0]?.modeId,
=======
        groupOptions: schema?.props?.options.map((btn: { name: string }) => ({ ...btn, label: btn.name })),
        idSelected: vizState[schema.mapTo] || schema?.props?.defaultSelections[0]?.id,
>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
        handleButtonChange: handleConfigurationChange(schema.mapTo),
        vizState,
        ...schema.props,
      };
      return (
        <>
          <DimensionComponent key={`viz-series-${index}`} {...params} />
          <EuiSpacer size="s" />
        </>
      );
    });
  }, [schemas, vizState, handleConfigurationChange]);;

  return (
    <EuiAccordion initialIsOpen id="configPanel__legend" buttonContent="Legend" paddingSize="s">
<<<<<<< HEAD
     {dimensions}
=======
      {dimensions}
>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
    </EuiAccordion>
  );
};
