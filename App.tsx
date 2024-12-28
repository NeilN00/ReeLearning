import {PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import RootStack from './navigation/RootStack';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      primary: 'rgb(62, 105, 25)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(190, 242, 145)',
      onPrimaryContainer: 'rgb(12, 32, 0)',
      secondary: 'rgb(86, 98, 75)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(218, 231, 201)',
      onSecondaryContainer: 'rgb(20, 30, 12)',
      tertiary: 'rgb(56, 102, 101)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(187, 236, 234)',
      onTertiaryContainer: 'rgb(0, 32, 31)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(253, 253, 245)',
      onBackground: 'rgb(26, 28, 24)',
      surface: 'rgb(253, 253, 245)',
      onSurface: 'rgb(26, 28, 24)',
      surfaceVariant: 'rgb(224, 228, 214)',
      onSurfaceVariant: 'rgb(68, 72, 62)',
      outline: 'rgb(116, 121, 109)',
      outlineVariant: 'rgb(196, 200, 186)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 49, 44)',
      inverseOnSurface: 'rgb(241, 241, 234)',
      inversePrimary: 'rgb(163, 213, 120)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(243, 246, 234)',
        level2: 'rgb(238, 241, 227)',
        level3: 'rgb(232, 237, 221)',
        level4: 'rgb(230, 235, 219)',
        level5: 'rgb(226, 232, 214)',
      },
      surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
      backdrop: 'rgba(45, 50, 40, 0.4)',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <RootStack />
    </PaperProvider>
  );
};

export default App;
