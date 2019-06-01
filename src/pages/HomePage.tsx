import * as React from 'react';

class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className='container'>
        <div className='block-content'>
          <div className='col-xs-12'>
            <article className='module'>
              <div className='hero-content'>
                <h1 className='col-md-8 col-sm-7 ucase page-title hidden-xs'>NEW APPLIED NOW</h1>
                <div className='subhero-content col-sm-6'>
                  <div className='hero-description'>
                    <p>Discover how you embrace innovation to drive new value for your organization.
                      Explore new insights. See tangible outcomes.</p>
                  </div>
                  <div className='modal-play'>
                    <a className='cta-button' href='/th-en/insights/into-the-new' target='' role='button'>
                      <div className='btn btn-primary front ucase text-bold'>LEARN MORE</div>
                      <div className="behind" aria-hidden="true">Model.CallToActionText</div>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
