import data from "@data/sections/reservation-form.json";
import ReservationForm from "@components/forms/ReservationForm";

const ReservationSection = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <div className="text-center">
            <div
              className="tst-suptitle tst-suptitle-center tst-mb-15"
              dangerouslySetInnerHTML={{ __html: data.name }}
            />
            <h3
              className="tst-mb-30"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p
              className="tst-text tst-mb-60"
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          </div>
          {/* title end */}
        </div>

        <div className="col-lg-12">
          <div className="text-center">
            <ReservationForm data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationSection;
