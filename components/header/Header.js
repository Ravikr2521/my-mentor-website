"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Loader from "../Loader";
import { IoCall } from "react-icons/io5";
import QuickEnquiry from "../globalcomponent/QuickEnquiry";

function OffCanvasExample({ data }) {
  const [activeKey, setActiveKey] = useState(null);

  const handleAccordionToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const [loader, setLoader] = useState(false);
  const pathname = usePathname();

  const handleLoader = () => {
    setLoader(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  useEffect(() => {
    setLoader(false);
  }, [pathname]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loader ? <Loader isLoading={loader} /> : null}
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button> */}
      <RxHamburgerMenu onClick={handleShow} className="mt-2 " size={35} />
      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link href="/" onClick={handleLoader}>
              {" "}
              <img className="w-50" src="/img/logo.png"></img>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.map((item, i) => {
            return (
              <div key={i}>
                {item.attributes.url_collections.data.length !== 0 ? (
                  <div>
                    <Accordion activeKey={activeKey}>
                      <Accordion.Item
                        eventKey={i}
                        className="w-100"
                        onClick={() => handleAccordionToggle(i)}
                      >
                        <Accordion.Header>
                          {item.attributes.URLText}
                        </Accordion.Header>
                        <Accordion.Body className="">
                          {item.attributes.url_collections.data.map(
                            (list, j) => {
                              return (
                                <Link
                                  href={list?.attributes?.url}
                                  className="decoration-none txt_blue"
                                  onClick={handleLoader}
                                  key={j}
                                >
                                  <p
                                    className="hover "
                                    style={{ marginLeft: "20px" , fontWeight:"500" }}
                                  >
                                    {list.attributes.URLText}
                                  </p>
                                </Link>
                              );
                            }
                          )}
                        </Accordion.Body>
                        <hr className="m-0" />
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ) : (
                  <Card className="border-0 accordian-custom">
                    <Card.Body style={{ fontWeight: "500" }}>
                      <Link
                        href={item?.attributes?.url}
                        className="decoration-none txt_blue"
                        onClick={handleLoader}
                      >
                        {item.attributes.URLText}
                      </Link>
                    </Card.Body>
                    <hr className="m-0" />
                  </Card>
                )}
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Header({ data }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [loader, setLoader] = useState(false);
  const pathname = usePathname();

  const handleLoader = () => {
    setLoader(true);
  };

  useEffect(() => {
    setLoader(false);
  }, [pathname]);

  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setFixed(false);
      setHidden(false);
    } else if (window.scrollY > lastScrollY) {
      setFixed(true);
      setHidden(true);
    } else {
      setFixed(true);
      setHidden(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="position-relative" style={{ zIndex: "9" }}>
      {loader ? <Loader isLoading={loader} /> : null}
      <div
        className={`navbar-container  ${fixed ? "fixed" : ""} ${
          hidden ? "hidden" : "active"
        }`}
      >
        <div className="container-fluid  p-0 d-lg-block d-none d-md-none">
          <div className="col-12 col-lg-12 col-md-12  d-flex custom-padding position-relative">
            <div className="d-flex  col-lg-9  col-md-9 ">
              <div className="d-flex  gap-5">
                <Link href="/" onClick={handleLoader}>
                  {" "}
                  <img className="logoImage" src="/img/logo.png"></img>
                </Link>

                <div className="d-flex   justify-content-center align-items-center gap-2   headerlist  ">
                  {data.map((item, i) => {
                    return (
                      <div key={i}>
                        {item.attributes.url_collections.data.length !== 0 ? (
                          <div>
                            <ul className="ul-custom custom-sub-opacity hover mb-0">
                              <li className=" linehight ">
                                <p
                                  className="list-text hovermenu_list m-0"
                                  onMouseEnter={() => setHoverIndex(item.id)}
                                  onMouseLeave={() => setHoverIndex(null)}
                                >
                                  {" "}
                                  {item.attributes.URLText}
                                  <span className="dropdown_icon">
                                    {hoverIndex === item.id ? (
                                      <RiArrowDropUpLine size={30} />
                                    ) : (
                                      <RiArrowDropDownLine size={30} />
                                    )}
                                  </span>
                                </p>
                                <div
                                  
                                  className="custom-opacity shadow hover_div  w-100  bg-white d-flex  border-top position-absolute  align-items-center "
                                >
                                  <div className="d-flex justify-content-center w-100">
                                    <div className="col-lg-8 desktop_width">
                                      <div className=" d-flex  gap-5   ">
                                        {item.attributes.url_collections.data.map(
                                          (list, i) => {
                                            return (
                                              <Link
                                                className="decoration-none"
                                                href={list?.attributes?.url}
                                                onClick={handleLoader}
                                                key={i}
                                              >
                                                {" "}
                                                <div
                                                  className=" m-0 list-text mb-5"
                                                  style={{
                                                    borderBottom:
                                                      "3px solid #F8FAFB",
                                                    height: "75px",
                                                  }}
                                                >
                                                  {list.attributes.URLText}
                                                </div>
                                              </Link>
                                            );
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <ul className="ul-custom custom-sub-opacity hover mb-0">
                            <li className="hovermenu_list linehight fs-6 ">
                              <Link
                                className=" decoration-none d-flex justify-content-center align-items-center      list-text"
                                href={item?.attributes?.url}
                                onClick={handleLoader}
                              >
                                {item.attributes.URLText}
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 d-flex justify-content-around align-items-center ">
              <div className="shake-on-hover d-flex align-items-center">
                <IoCall className="shake-icon" />
                <Link
                  href="tel:+91 93 9338 8373"
                  className="text-black text-decoration-none"
                >
                  <span className="m-0 fw-bold mx-1 list-text">
                    (+91) 93 9338 8373
                  </span>
                </Link>
              </div>

              <div className="tooltip-container ">
                <button
                  style={{ fontSize: "16px" }}
                  className="rounded-pill px-3 py-2 border-0 text-white gradient_red"
                  onMouseEnter={() => setShowTooltip(true)}
                  // onMouseLeave={() => setShowTooltip(false)}
                >
                  Quick Enquiry
                </button>
                {showTooltip && (
                  <QuickEnquiry toggle={setShowTooltip}/>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 d-lg-none d-md-block d-block p-2">
          <div className="d-flex justify-content-between align-items-center px-1">
            <Link href="/" onClick={handleLoader}>
              {" "}
              <img className="w-50" src="/img/logo.png"></img>{" "}
            </Link>
            {/* <RxHamburgerMenu className='mt-2 ' size={35} /> */}
            <OffCanvasExample placement="end" name="end" data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
