import { Link } from "react-router-dom"
import { getImageURL } from "./utils/ImageCert-util"

const certificates = [{ id: 1, name: "css certificate", url: "css.jpg" },
{ id: 2, name: "html certificate", url: "html.jpg" },
{ id: 3, name: "thrive certificate", url: "thrivecerti.jpg" }
]

function Certificate() {
    return (
        <>
            <div className="container">
                {certificates.map((certificate) => (
                    <div className="certificate" key={certificate.id} >
                        <Link to={`/certificate/${certificate.id}`} state={{ certificate }}>
                            {/* <img src={importImage(certificate.image)} alt={certificate.name} /> */}
                            <img src={getImageURL(certificate.url)} alt={certificate.name} className="" />
                            {/* <h4>{certificate.price}</h4> */}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Certificate