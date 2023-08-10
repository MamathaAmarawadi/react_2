import BannerCard from './components/BannerCardItem/index'

import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div>
    <div className="common1">
      <BannerCard bannerCardsList={bannerCardsList[0]} />
    </div>
    <div className="common2">
      <BannerCard bannerCardsList={bannerCardsList[1]} />
    </div>
    <div className="common3">
      <BannerCard bannerCardsList={bannerCardsList[2]} />
    </div>
  </div>
)

export default App
