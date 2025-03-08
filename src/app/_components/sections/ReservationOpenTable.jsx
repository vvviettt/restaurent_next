import Data from "@data/sections/reservation-opentable.json";
import OpenTableForm from "@components/forms/OpenTableForm";

const ReservationOpenTableSection = () => {
    return (
        <>
            <div className="row">

              <div className="col-lg-12">

                {/* title */}
                <div className="text-center">
                  <div className="tst-suptitle tst-suptitle-center tst-mb-15" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                  <h3 className="tst-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                  <p className="tst-text tst-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />
                </div>
                {/* title end */}

              </div>

              <div className="col-lg-12">

                <div className="text-center">
                  <OpenTableForm />
                </div>

              </div>
            </div>
        </>
    );
};

export default ReservationOpenTableSection;