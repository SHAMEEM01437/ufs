import tConsulting_image from '../../assets/images/trainer-image.webp'
const TrainingConsulting = () => {
  return (
        <section className="training_consulting section_paddingB">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="training_consulting_content">
                        <img src={tConsulting_image} alt="Trainner" className="trainer_image" />
                        <div className="tcc_content">
                            <h3>Training & Consultancy</h3>
                            <p>We provide specialized training programs for individuals and teams working at height. Our
                                certified trainers will equip your personnel with the knowledge and skills necessary to
                                perform their tasks safely and efficiently. Whether it’s harness usage, rescue
                                techniques, or safety procedures, our training programs cover it all.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TrainingConsulting