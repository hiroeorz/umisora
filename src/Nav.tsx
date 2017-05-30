import * as React from 'react';

export interface NavClassProps {
    title: string;
    value?: string;
}

export interface NavState {
    navTopClass: string;
    navWAClass: string;
    navScheduleClass: string;
}

export default class NavClass extends React.Component<NavClassProps, NavState> {

    state: NavState = {navTopClass: "active",
                       navWAClass: "",
                       navScheduleClass: ""
                      };

    constructor(props: NavClassProps) {
        super(props);
    }

    render() {
        return (
          <div className="navbar">
            <div className="navbar-inner">
              <a className="brand" href="#">{this.props.title}</a>
              <ul className="nav">
                <li className={this.state.navTopClass}>
                  <a href="#" onClick={this.gotoTop.bind(this)}>トップ</a>
                </li>
                <li className={this.state.navWAClass}>
                  <a href="#" onClick={this.gotoWaterAnalysis.bind(this)}>水系解析</a>
                </li>
                <li className={this.state.navScheduleClass}>
                  <a href="#" onClick={this.gotoSchedule.bind(this)}>スケジュール</a>
                </li>
              </ul>
            </div>
          </div>
        )
    }

    private gotoTop(evt: any): void {
      this.setState({navTopClass: "active"});
      this.setState({navWAClass: ""});
      this.setState({navScheduleClass: ""});
    }

    private gotoWaterAnalysis(evt: any): void {
      this.setState({navTopClass: ""});
      this.setState({navWAClass: "active"});
      this.setState({navScheduleClass: ""});
    }

    private gotoSchedule(evt: any): void  {
      this.setState({navTopClass: ""});
      this.setState({navWAClass: ""});
      this.setState({navScheduleClass: "active"});
    }
}
