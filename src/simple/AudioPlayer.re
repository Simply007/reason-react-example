type state = {url: string};

type action =
  | SetUrl(string);

let component = ReasonReact.reducerComponent("AudioPlayer");

let make = (~podcasts, _children) => {
  ...component,
  initialState: () => {url: ""},
  reducer: (action, state) =>
    switch (action) {
    | SetUrl(newUrl) => ReasonReact.Update({...state, url: newUrl})
    },
  render: self =>
    <div>
      <ul>
        {
          ReasonReact.array(
            Array.map(
              item =>
                switch (item##enclosure) {
                | None => <div />
                | Some(enclosure) =>
                  <li onClick=(_event => self.send(SetUrl(enclosure##url)))> {ReasonReact.string(item##title)} </li>
                },
              podcasts,
            ),
          )
        }
      </ul>
      {switch(self.state.url){
        | "" => ReasonReact.string("Select correct podcast")
        | _ => <audio controls=true src={self.state.url}>
        {ReasonReact.string("Your browser des not support audio tag")}
      </audio>
      }}
    </div>,
};