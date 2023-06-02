export const carouselArray = [
    "https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-planet-195641418.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_SpaceX_Factory.jpg/1200px-The_SpaceX_Factory.jpg",
    "https://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_certification_feature_main.jpg",
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg",
    "https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg",
    "https://www.analyticsinsight.net/wp-content/uploads/2022/04/Fact-Check-Is-SpaceX-and-its-AI-Capabilities-Outperforming-NASA.jpg",
   "https://media.wired.com/photos/5a39add105f16a0c504434d2/master/w_2560%2Cc_limit/falcon-TA.jpg",
   "https://spaceflightnow.com/wp-content/uploads/2023/05/20230510star2-9.jpeg",
   "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
   "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
   "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
   "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
   "https://imgur.com/azYafd8.jpg",
   "https://imgur.com/DaCfMsj.jpg",
   "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/hcukymjitstff5zm_1590834618.jpeg",
   "https://images.livemint.com/img/2022/06/01/600x338/SpaceX_1654075339729_1654075339901.jpg",
   "https://media.cnn.com/api/v1/images/stellar/prod/230510142015-02-spacex-vast-private-space-station-launch.jpg?c=original",
   "https://static.independent.co.uk/2023/01/10/11/spacex%20starship%20launch%20faa.png?width=1200",
   "https://www.spacex.com/static/images/content/fh_performance.jpg"
  ];

  export async function gridDataa(dispatch){
    const apiResponse = await fetch("https://api.spacexdata.com/v3/capsules")
    const data = await apiResponse.json()
    dispatch({
        type:"gridData",
        data:data
    })
    console.log(data)
  }