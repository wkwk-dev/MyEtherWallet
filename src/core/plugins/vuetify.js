import Vue from 'vue';
import vuetifyTheme from '@/mew-components/assets/styles/vuetifyTheme.js';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import Vuetify, {
  VApp,
  VBtn,
  VBtnToggle,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VForm,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSheet,
  VBottomSheet,
  VToolbar,
  VTextField,
  VTextarea,
  VLayout,
  VSelect,
  VCombobox,
  VTooltip,
  VStepper,
  VStepperHeader,
  VStepperStep,
  VStepperItems,
  VStepperContent,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelContent,
  VExpansionPanelHeader,
  VSwitch,
  VCheckbox,
  VTab,
  VTabs,
  VTabsItems,
  VTabItem,
  VMenu,
  VMain,
  VSpacer,
  VSlider,
  VDataTable,
  VCarousel,
  VSlideYTransition,
  VSlideXReverseTransition,
  VCarouselItem,
  VListGroup,
  VListItemGroup,
  VOverlay,
  VThemeProvider,
  VRadio,
  VRadioGroup,
  VProgressLinear,
  VProgressCircular,
  VFileInput,
  VSimpleCheckbox,
  VPagination,
  VFooter,
  VAppBar,
  VItem,
  VItemGroup,
  VScrollYTransition,
  VSkeletonLoader,
  VChip,
  VSystemBar,
  VAlert
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VBtnToggle,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VCol,
    VContainer,
    VContent,
    VDialog,
    VDivider,
    VForm,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSheet,
    VBottomSheet,
    VToolbar,
    VTextField,
    VTextarea,
    VLayout,
    VSelect,
    VCombobox,
    VTooltip,
    VStepper,
    VStepperHeader,
    VStepperStep,
    VStepperItems,
    VStepperContent,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelContent,
    VExpansionPanelHeader,
    VSwitch,
    VCheckbox,
    VTab,
    VTabs,
    VTabsItems,
    VTabItem,
    VMenu,
    VMain,
    VSpacer,
    VSlider,
    VDataTable,
    VCarousel,
    VSlideYTransition,
    VSlideXReverseTransition,
    VCarouselItem,
    VListGroup,
    VListItemGroup,
    VOverlay,
    VThemeProvider,
    VRadio,
    VRadioGroup,
    VProgressLinear,
    VProgressCircular,
    VFileInput,
    VSimpleCheckbox,
    VPagination,
    VFooter,
    VAppBar,
    VItem,
    VItemGroup,
    VScrollYTransition,
    VSkeletonLoader,
    VChip,
    VSystemBar,
    VAlert
  }
});

export default new Vuetify(vuetifyTheme);
