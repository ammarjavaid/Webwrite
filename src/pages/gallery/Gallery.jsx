import React, { useRef, useState } from "react";
import "./gallery.scss";
import { Col, Row } from "antd";
import {
  galleryTourimg7,
  galleryimg1,
  galleryimg3,
  galleryimg5,
  galleryimg6,
  galleryimg7,
  galleryimg8,
  webwrite1,
  webwrite10,
  webwrite11,
  webwrite12,
  webwrite13,
  webwrite14,
  webwrite15,
  webwrite16,
  webwrite2,
  webwrite3,
  webwrite4,
  webwrite5,
  webwrite6,
  webwrite7,
  webwrite8,
  webwrite9,
} from "../../assets";
import Footer from "../../components/footer/Footer";
import { useModal, useVerticalModal } from "../../config/CustomHooks";
import MainImgModal from "../../components/modal/MainImgModal";
import MainImgVerticalModal from "../../components/modal/MainImgVerticalModal";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

const Gallery = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 968px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 390px)" });

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVerticalImage, setSelectedVerticalImage] = useState("");
  const { isOpen, setIsOpen } = useModal(false);
  const { isVerticalOpen, setIsVerticalOpen } = useVerticalModal(false);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };
  const handleImageVerticalClick = (imageUrl) => {
    setSelectedVerticalImage(imageUrl);
    setIsVerticalOpen(true);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HashLoader color="#0051FB" size={50} />
        </div>
      ) : (
        <>
          {isOpen ? (
            <MainImgModal
              onClose={() => setIsOpen(false)}
              src={selectedImage}
            />
          ) : null}
          {isVerticalOpen ? (
            <MainImgVerticalModal
              onClose={() => setIsVerticalOpen(false)}
              src={selectedVerticalImage}
            />
          ) : null}

          <div className="container gallery">
            <div className="gallery-heading">
              <div className="gallery-heading-left">
                <h1> Gallery </h1>
                <p>
                  A healthy environment focuses on team collaboration and unity.
                  Our team understands it well!
                </p>
              </div>
            </div>

            <div className="gallery-images mt-3 mb-5">
              <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                <Col span={isTablet ? 24 : 12}>
                  <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                    <Col span={12}>
                      <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                        <Col span={24}>
                          <img
                            src={webwrite1}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite1)}
                          />
                        </Col>
                        <Col span={24}>
                          <img
                            src={webwrite2}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite2)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <img
                            src={webwrite3}
                            alt=""
                            className="galleryimgVertical"
                            onClick={() => handleImageVerticalClick(webwrite3)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <img
                        src={webwrite4}
                        alt=""
                        className="galleryimgSquare"
                        onClick={() => handleImageClick(webwrite4)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite7}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite7)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite8}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite8)}
                      />
                    </Col>
                    <Col span={24}>
                      <img
                        src={webwrite12}
                        alt=""
                        className="galleryimgSquare"
                        style={{ height: "100%" }}
                        onClick={() => handleImageClick(webwrite12)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={galleryimg1}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(galleryimg1)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite15}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite15)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={galleryimg1}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(galleryimg1)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite13}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite13)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={isTablet ? 24 : 12}>
                  <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                    <Col span={12}>
                      <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                        <Col span={24}>
                          <img
                            src={webwrite5}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite5)}
                          />
                        </Col>
                        <Col span={24}>
                          <img
                            src={webwrite6}
                            alt=""
                            className="galleryimgVertical"
                            onClick={() => handleImageVerticalClick(webwrite6)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row gutter={isMobile ? [5, 5] : [10, 10]}>
                        <Col span={24}>
                          <img
                            src={webwrite9}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite9)}
                          />
                        </Col>
                        <Col span={24}>
                          <img
                            src={webwrite10}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite10)}
                          />
                        </Col>
                        <Col span={24}>
                          <img
                            src={webwrite11}
                            alt=""
                            className="galleryimgbox"
                            onClick={() => handleImageClick(webwrite11)}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <img
                        src={galleryimg8}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(galleryimg8)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite16}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite16)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={webwrite14}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(webwrite14)}
                      />
                    </Col>
                    {/* <Col span={12}>
                      <img
                        src={galleryimg8}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(galleryimg8)}
                      />
                    </Col> */}
                    {/* <Col span={12}>
                      <img
                        src={galleryimg8}
                        alt=""
                        className="galleryimgbox"
                        onClick={() => handleImageClick(galleryimg8)}
                      />
                    </Col> */}
                    <Col span={12}>
                      <img
                        src={galleryimg6}
                        alt=""
                        className="galleryimgVertical galleryimgVerticalLess"
                        onClick={() => handleImageVerticalClick(galleryimg6)}
                      />
                    </Col>
                    <Col span={12}>
                      <img
                        src={galleryimg6}
                        alt=""
                        className="galleryimgVertical galleryimgVerticalLess"
                        onClick={() => handleImageVerticalClick(galleryimg6)}
                      />
                    </Col>
                    <Col span={24}>
                      <img
                        src={galleryTourimg7}
                        alt=""
                        className="galleryimgbox"
                        style={{ height: "27vh", objectFit: "cover" }}
                        onClick={() =>
                          handleImageVerticalClick(galleryTourimg7)
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Gallery;
