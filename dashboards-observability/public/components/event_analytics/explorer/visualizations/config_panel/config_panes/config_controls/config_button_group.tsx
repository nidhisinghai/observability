/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
<<<<<<< HEAD
import { uniqueId } from 'lodash';
import { EuiTitle, EuiSpacer, EuiButtonGroup } from '@elastic/eui';

export const ButtonGroupItem = ({
  title, legend, groupOptions, idSelected, handleButtonChange
}: any) => {
  return (
    <>
      <EuiTitle size="xxs">
        <h3>{title}</h3>
      </EuiTitle>
      <EuiSpacer size="s" />

      <EuiButtonGroup
        id={uniqueId('button-select-')}
        name={title}
        legend={legend}
        options={groupOptions}
        idSelected={idSelected}
        onChange={handleButtonChange}
        buttonSize="compressed"
        isFullWidth={false}
      />
    </>
  );
};
=======
import { EuiTitle, EuiSpacer, EuiButtonGroup, htmlIdGenerator } from '@elastic/eui';
interface ToggleButtonOptions {
  id: string;
  label: string;
}
interface ToggleGroupProps {
  title: string;
  legend: string;
  groupOptions: ToggleButtonOptions[];
  idSelected: string;
  handleButtonChange: (id: string, value?: any) => void;
}
export const ButtonGroupItem: React.FC<ToggleGroupProps> = ({
  title, legend, groupOptions, idSelected, handleButtonChange
}) => (
    <>
        <EuiTitle size="xxs">
            <h3>{title}</h3>
        </EuiTitle>
        <EuiSpacer size="s" />

        <EuiButtonGroup
            id={htmlIdGenerator('button-select')()}
            name={title}
            legend={legend}
            options={groupOptions}
            idSelected={idSelected}
            onChange={handleButtonChange}
            buttonSize="compressed"
            isFullWidth={false}
        />
    </>
);
>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
