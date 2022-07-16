const NotFound = () => {
    return (
        <div class="wrapper">
            <div className="gradient">
                <div className="container">
                    <img
                        src="../../assets/images/error/404.png"
                        className="img-fluid mb-4 w-50"
                        alt
                    />
                    <h2 className="mb-0 mt-4 text-white">
                        Oops! This Page is Not Found.
                    </h2>
                    <p className="mt-2 text-white">
                        The requested page dose not exist.
                    </p>
                    <a
                        className="btn bg-white text-primary d-inline-flex align-items-center"
                        href="../index.html"
                    >
                        Back to Home
                    </a>
                </div>
                <div className="box">
                    <div className="c xl-circle">
                        <div className="c lg-circle">
                            <div className="c md-circle">
                                <div className="c sm-circle">
                                    <div className="c xs-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
