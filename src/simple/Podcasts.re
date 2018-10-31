let component = ReasonReact.statelessComponent("Podcasts");

let make = (~podcasts, _children) => {
  ...component,

  render: _self =>
    <div>
      <h1> {ReasonReact.string(podcasts##title)} </h1>
      <AudioPlayer podcasts=podcasts##items/>
    </div>,
};