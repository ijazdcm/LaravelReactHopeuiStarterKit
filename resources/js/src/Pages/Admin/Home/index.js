import WidgetCard from "../../../Components/Card/WidgetCard";

const Home = () => {
    return (
        <div className="row">
            <div class="col-lg-3">
                <WidgetCard  />
            </div>
            <div class="col-lg-3">
                <WidgetCard />
            </div>
            <div class="col-lg-3">
                <WidgetCard />
            </div>
            <div class="col-lg-3">
                <WidgetCard />
            </div>
        </div>
    );
};

export default Home;
