import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import TitleScreen from './components/title_screen';
import ImagineScreen from './components/imagine_screen';
import LetsLearnScreen from './components/lets_learn_screen';
import VideoScreen from './components/video_screen';
import ManyMaterialsScreen from './components/many_materials_screen';
import SortGameLevelOneScreen from './components/sort_game_level_one_screen';
import SortGameLevelTwoScreen from './components/sort_game_level_two_screen';
import SortGameLevelThreeScreen from './components/sort_game_level_three_screen';
import CongratulationsScreen from './components/congratulations_screen';
import HelpTheWorldScreen from './components/help_the_world_screen';
import BunchOfProblemsScreen from './components/bunch_of_problems_screen';
import PrinterScreen from './components/printer_screen';
import NowTheYouLearnedScreen from './components/now_that_you_learned_screen';
import ListScreen from './components/list_screen';
import FlipScreen from './components/flip_screen';

import QuitScreen from 'shared/components/quit_screen/0.1';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            ImagineScreen,
            LetsLearnScreen,
            VideoScreen,
            ManyMaterialsScreen,
            SortGameLevelOneScreen,
            SortGameLevelTwoScreen,
            SortGameLevelThreeScreen,
            CongratulationsScreen,
            HelpTheWorldScreen,
            BunchOfProblemsScreen,
            PrinterScreen,
            NowTheYouLearnedScreen,
            ListScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Source Sans Pro" />,
            <skoash.Audio ref="button" type="sfx" src={CMWN.MEDIA.EFFECT + 'Back.mp3'} />,
            <skoash.Audio ref="next" type="sfx" src={CMWN.MEDIA.EFFECT + 'Next.mp3'} />,
            <skoash.Audio ref="back" type="sfx" src={CMWN.MEDIA.EFFECT + 'Back.mp3'} />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={CMWN.MEDIA.EFFECT + 'NextAppear.mp3'}
            />,
            <skoash.Audio
                type="background"
                src={CMWN.MEDIA.EFFECT + 'TitleScreen.mp3'}
                loop
            />,
            <skoash.Audio type="background" src={CMWN.MEDIA.EFFECT + 'BKG1.mp3'} loop />,
            <skoash.Audio type="background" src={CMWN.MEDIA.EFFECT + 'BKG2.mp3'} loop />,
            <skoash.Audio type="background" src={CMWN.MEDIA.EFFECT + 'BKG3.mp3'} loop />,
            <skoash.Audio type="background" src={CMWN.MEDIA.EFFECT + 'BKG4.mp3'} loop />,
            <skoash.Audio type="background" src={CMWN.MEDIA.EFFECT + 'BKG5.mp3'} loop />,
            <skoash.Image className="hidden" src={CMWN.MEDIA.IMAGE + 'bkg.jpg'} />,
            <skoash.Image className="hidden" src={CMWN.MEDIA.IMAGE + 'bk.1.jpg'} />,
            <skoash.Image className="hidden" src={CMWN.MEDIA.IMAGE + 'bkg.2.jpg'} />,
            <skoash.Image className="hidden" src={CMWN.MEDIA.IMAGE + 'bkg.win.jpg'} />,
            <div className="background bkg-imagine" />,
            <div className="background bkg-congratulations" />,
            <div className="background bkg-printer" />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title': return 0;
                case 'imageine':
                case 'lets-learn':
                    return 1;
                case 'sort-game-level-one':
                case 'sort-game-level-two':
                case 'sort-game-level-three':
                case 'congratulations':
                    return 3;
                case 'help-the-world':
                case 'bunch-of-problems':
                    return 4;
                case 'printer':
                    return 5;
                default: return 2;
            }
        }}
    />
);

if (module.hot) module.hot.accept();
