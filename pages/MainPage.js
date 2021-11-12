import React from 'react';
import ContentBlock from '../components/ContentBlock';

const MainPage = () => {
  return (
    <div>
      <ContentBlock bgImg={"crew-2/splashdown/Crew-1_Crew_Desktop.webp"}
        type={"COMPLETED MISSION"}
        title={"DRAGON RETURNS TO EARTH"}
        description={"Dragon completes world’s first all-civilian mission to orbit"}
      />
      <ContentBlock bgImg={"crew-2/docking/Homepage_Dragon_Docking_Desktop.webp"}
        type={"cursus in hac habitasse"}
        title={"platea dictumst quisque sagittis purus sit"}
        description={"amet volutpat consequat mauris"} />
      <ContentBlock bgImg={"backgrounds-2021/sn15/post-launch/HP_SN15_Desktop.webp"} />
      <ContentBlock bgImg={"backgrounds-2021/sl26/Homepage_SL26_7371_Desktop.webp"} />
      <ContentBlock bgImg={"backgrounds-2021/hls-resized-2.webp"} />
      <ContentBlock bgImg={"backgrounds/iss_game.webp"} />
    </div>
  )
}

export default MainPage;
