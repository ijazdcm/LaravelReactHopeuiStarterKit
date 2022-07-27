import PropTypes from 'prop-types'

const WidgetCard = ({Tittle,Amount,BadgeText,SubTittle,Color='primary'}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <span>
                            <b>{Tittle ?? 'Default Tittle'}</b>
                        </span>
                        <div className="mt-2">
                            <h2
                                className="counter"
                                style={{ visibility: "visible" }}
                            >
                                Rs {Amount ?? 0}
                            </h2>
                        </div>
                    </div>
                    <div>
                        <span className={`badge bg-${Color}`}>{BadgeText ?? 'Default Text'}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <div>
                        <span>{SubTittle ?? 'Default SubText'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

WidgetCard.propTypes = {
    Tittle: PropTypes.string,
    Amount: PropTypes.number,
    BadgeText: PropTypes.string,
    SubTittle: PropTypes.string,
    Color: PropTypes.string,
  }

export default WidgetCard;
