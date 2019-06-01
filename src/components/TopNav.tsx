import * as React from 'react';
import 'assets/scss/main.scss';

class TopNav extends React.Component<{}, {}> {
  public render() {
    return (
      <nav id='header-topnav' className='navbar navbar-default navbar-fixed-top'>
        <div className='acn-logo-container hidden-sm hidden-xs'>
          <a href='/th-en' className='gh-item acn-logo' title='Accenture' data-rel='5db5d373-803f-4202-9aac-b3cbd2a110b6' data-name='asset'
             data-linktype='logo' role='banner' data-linkcomponentname='top nav' data-cell='GH0'>
            <img src='//www.accenture.com/t20180820T081710Z__w__/th-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG'
                 alt='Accenture'/>
          </a>

        </div>
        <div id="nav-content-menu" className="nav-content panel-group">
          <div className="primary-link-container" role="toolbar" id="navigation-menu">
            <div className="nav-submenu panel layout-row  short" data-id="primaryLink1_Insights" data-linkcomponentname="primary nav">
              <div className="gh-item nav-submenu-label" role="presentation"
                   data-parent="#navigation-menu" aria-label="Insights" data-linkcomponentname="primary nav" data-cell="GH1"
                   data-linktype="nav/paginate">
                <span className="nav-submenu-label-text">Insights</span>
                <div className="expand-collapse-container visible-xs visible-sm">
                  <span className="ion-chevron-down"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
