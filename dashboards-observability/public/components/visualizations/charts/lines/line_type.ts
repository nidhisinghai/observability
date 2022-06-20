/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Line } from './line';
import { getPlotlySharedConfigs, getPlotlyCategory } from '../shared/shared_configs';
import { LensIconChartLine } from '../../assets/chart_line';
import { PLOTLY_COLOR } from '../../../../../common/constants/shared';
import { VizDataPanel } from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/default_vis_editor';
import { ConfigEditor } from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/json_editor';
import {
  ConfigValueOptions,
  ConfigThresholds,
  ConfigChartStyles,
  ConfigLegend,
} from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/config_controls';
<<<<<<< HEAD
import { DefaultChartStyles } from '../../../../../common/constants/shared';
=======
import { ConfigAvailability } from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/config_controls/config_availability';

>>>>>>> 3043a965913cf6e30e417b64327cb57ac1390212
const sharedConfigs = getPlotlySharedConfigs();
const VIS_CATEGORY = getPlotlyCategory();
const { DefaultMode, Interpolation, LineWidth, FillOpacity } = DefaultChartStyles;

export const createLineTypeDefinition = (params: any = {}) => ({
  name: 'line',
  type: 'line',
  id: 'line',
  label: 'Line',
  fullLabel: 'Line',
  iconType: 'visLine',
  category: VIS_CATEGORY.BASICS,
  selection: {
    dataLoss: 'nothing',
  },
  icon: LensIconChartLine,
  categoryAxis: 'xaxis',
  seriesAxis: 'yaxis',
  editorConfig: {
    panelTabs: [
      {
        id: 'data-panel',
        name: 'Data',
        mapTo: 'dataConfig',
        editor: VizDataPanel,
        sections: [
          {
            id: 'value_options',
            name: 'Value options',
            editor: ConfigValueOptions,
            mapTo: 'valueOptions',
            schemas: [
              {
                name: 'X-axis',
                isSingleSelection: true,
                component: null,
                mapTo: 'xaxis',
              },
              {
                name: 'Y-axis',
                isSingleSelection: false,
                component: null,
                mapTo: 'yaxis',
              },
            ],
          },
          {
            id: 'legend',
            name: 'Legend',
            editor: ConfigLegend,
            mapTo: 'legend',
            schemas: [
              {
                name: 'Show Legend',
                mapTo: 'showLegend',
                component: null,
                props: {
                  options: [
                    { name: 'Show', modeId: "show" },
                    { name: 'Hidden', modeId: "hidden" },
                  ],
                  defaultSelections: [{ name: 'Show', modeId: "show" }],
                },
              },
              {
                name: 'Position',
                mapTo: 'position',
                component: null,
                props: {
                  options: [
                    { name: 'Right', modeId: 'v' },
                    { name: 'Bottom', modeId: 'h' },
                  ],
                  defaultSelections: [{ name: 'Right', modeId: 'v' }],
                },
              },
            ],
          },
          {
            id: 'chart_styles',
            name: 'Chart styles',
            editor: ConfigChartStyles,
            mapTo: 'chartStyles',
            schemas: [
              {
                name: 'Mode',
                component: null,
                mapTo: 'style',
                props: {
                  options: [
                    { name: 'Lines', modeId: 'lines' },
                    { name: 'Bars', modeId: 'bar' },
                    { name: 'Points', modeId: 'markers' },
                    { name: 'Lines + Points', modeId: 'lines+markers' }
                  ],
                  defaultSelections: [{ name: 'Lines', modeId: DefaultMode }],
                },
              },
              {
                name: 'Interpolation',
                component: null,
                mapTo: 'interpolation',
                props: {
                  options: [
                    { name: 'Linear', modeId: 'linear' },
                    { name: 'Smooth', modeId: 'spline' },
                    { name: 'Step before', modeId: 'hv' },
                    { name: 'Step after', modeId: 'vh' },
                  ],
                  defaultSelections: [{ name: 'Smooth', modeId: Interpolation }],
                },
              },
              {
                name: 'Bar alignment',
                component: null,
                mapTo: 'barAlignment',
                props: {
                  options: [
                    { name: 'Before', modeId: 'before' },
                    { name: 'Center', modeId: 'center' },
                    { name: 'After', modeId: 'after' },
                  ],
                  defaultSelections: [{ name: 'Center', modeId: 'center' }],
                },
              },
              {
                name: 'Line width',
                component: null,
                mapTo: 'lineWidth',
                defaultState: LineWidth,
                max: 10,
              },
              {
                name: 'Fill Opacity',
                component: null,
                mapTo: 'fillOpacity',
                defaultState: FillOpacity,
                max: 100,
              },
              {
                name: 'Point Size',
                component: null,
                mapTo: 'pointSize',
                defaultState: 5,
                max: 40,
              },
            ],
          },
          {
            id: 'thresholds',
            name: 'Thresholds',
            editor: ConfigThresholds,
            mapTo: 'thresholds',
            defaultState: [],
            schemas: [],
          },
        ],
      },
      {
        id: 'style-panel',
        name: 'Layout',
        mapTo: 'layoutConfig',
        editor: ConfigEditor,
        content: [],
      },
      {
        id: 'availability-panel',
        name: 'Availability',
        mapTo: 'availabilityConfig',
        editor: ConfigAvailability,
      },
    ],
  },
  visConfig: {
    layout: {
      ...sharedConfigs.layout,
      ...{
        colorway: PLOTLY_COLOR,
        plot_bgcolor: 'rgba(0, 0, 0, 0)',
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        xaxis: {
          fixedrange: true,
          showgrid: false,
          visible: true,
        },
        yaxis: {
          fixedrange: true,
          showgrid: false,
          visible: true,
        },
      },
    },
    config: {
      ...sharedConfigs.config,
      ...{
        barmode: 'line',
        xaxis: {
          automargin: true,
        },
        yaxis: {
          automargin: true,
        },
      },
    },
  },
  component: Line,
});
