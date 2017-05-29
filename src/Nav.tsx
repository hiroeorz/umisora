import * as React from 'react';

export interface Props {
    title: string;
    value?: string;
}

export default class NavClass extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {value: props.value? props.value : ""};
    }

    render() {
        return (
          <div className="navbar">
            <div className="navbar-inner">
              <a className="brand" href="#">{this.props.title}</a>
              <ul className="nav">
                <li className="active"><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
              </ul>
            </div>
          </div>
        )
    }
}
