import * as React from "react";

export interface NavProps {
  title: string;
  value?: string;
}

export interface NavState {
  navTopClass: string
  navWAClass: string;
  navScheduleClass: string;
}

export default class NavComponent extends React.Component<NavProps, NavState> {

  public state: NavState = {navTopClass: "active", navWAClass: "", navScheduleClass: ""};

  constructor(props: NavProps) {
    super(props);
  }

  public render() {
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
    );
  }

  private gotoTop(_evt: React.FormEvent<HTMLSelectElement>): void {
    this.clearSelected();
    this.setState({navTopClass: "active"});
  }

  private gotoWaterAnalysis(_evt: React.FormEvent<HTMLSelectElement>): void {
    this.clearSelected();
    this.setState({navWAClass: "active"});
  }

  private gotoSchedule(_evt: React.FormEvent<HTMLSelectElement>): void {
    this.clearSelected();
    this.setState({navScheduleClass: "active"});
  }

  private clearSelected(): void {
    this.setState({navTopClass: ""});
    this.setState({navWAClass: ""});
    this.setState({navScheduleClass: ""});
  }
}
