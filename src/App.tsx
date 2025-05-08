// ** react imports **
import { Suspense, useState } from 'react';

// ** icons **
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ** images **
import ModalImage from 'react-modal-image';
import AvatarLarge from 'assets/images/avatar-lg.webp';
import AvatarSmall from 'assets/images/avatar-sm.webp';

// ** custom components **
import views from 'views';

// ** enums **
import ViewsEnums from 'enums/ViewsEnums';

// =======================================
const App = () => {
  // ** states **
  const [activeView, setActiveView] = useState<ViewsEnums>(ViewsEnums.ABOUT);

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      {/* main content */}
      <div className="flex-grow-1 container py-5">
        <div className="justify-content-center row">
          <div className="col-5 col-md-2">
            <ModalImage
              alt="It's me! 😀"
              className="rounded-circle w-100 mb-3 shadow"
              hideDownload
              hideZoom
              large={AvatarLarge}
              small={AvatarSmall}
            />
          </div>
          <div className="col-md-7">
            {/* on smaller screens */}
            <div className="dropdown d-lg-none">
              <button
                className="btn-active btn dropdown-toggle mb-3 px-3 rounded-pill shadow-none"
                data-bs-toggle="dropdown"
              >
                {activeView}
              </button>
              <ul className="dropdown-menu">
                {Object.values(ViewsEnums).map((e, i) => (
                  <li key={i}>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveView(e)}
                    >
                      {e}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* on larger screens */}
            <div className="mb-3 d-none d-lg-block">
              {Object.values(ViewsEnums).map((e, i) => (
                <button
                  className={`btn btn-default rounded-pill me-1 px-3 shadow-none ${
                    activeView === e ? 'btn-active' : null
                  }`}
                  key={i}
                  onClick={() => setActiveView(e)}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="card rounded-3 w-100">
              <div className="card-body">
                <Suspense
                  fallback={
                    <div className="text-center">
                      <span className="spinner-border" />
                    </div>
                  }
                >
                  {views[activeView]}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="align-items-center d-flex footer justify-content-between p-3">
        <small className="m-0">
          <FontAwesomeIcon icon={faCopyright} /> Copyright{' '}
          {new Date().getFullYear()} Roy Allen Nidoy
        </small>
      </div>
    </div>
  );
};

export default App;
