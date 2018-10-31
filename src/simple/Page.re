let component = ReasonReact.statelessComponent("Page");

module GetPodcasts = [%graphql
  {|
  query getFeed {
  rss {
    rss2Feed(url: "http://podcasts.files.bbci.co.uk/p02pc9pj.rss") {
      items {
        enclosure {
          url
        }
        title
      }
      title
    }
  }
}
|}
];

module GetPodcastsQuery = ReasonApollo.CreateQuery(GetPodcasts);

/* `make` is the function that mandatorily takes `children` (if you want to use
   `JSX). `message` is a named argument, which simulates ReactJS props. Usage:

   `<Page message="hello" />`

   Which desugars to

   `ReasonReact.element (Page.make message::"hello" [||])` */
let make = _children => {
  ...component,
  render: _ => {
    <ReasonApollo.Provider client=Client.instance>
      <GetPodcastsQuery>
        ...{
             ({result}) =>
               switch (result) {
               | Loading => <div> {ReasonReact.string("Loading")} </div>
               | Error(error) =>
                 <div> {ReasonReact.string(error##message)} </div>
               | Data(response) =>
                 <div>
                   <Podcasts podcasts={response##rss##rss2Feed}/>
                 </div>
               }
           }
      </GetPodcastsQuery>
    </ReasonApollo.Provider>;
  },
};