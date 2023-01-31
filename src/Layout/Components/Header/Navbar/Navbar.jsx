import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import config from "../../../../Config";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../../../asset/icon/Logo_Ananas_Header.svg";
import imageDiscoverYou from "../../../../asset/icon/DiscoverYOU.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../Menu/Menu";

import * as categoryService from "../../../../service/categoryService";

import menuNamImg from "../../../../asset/images/menu/Menu_Nam.jpg";
import menuNuImg from "../../../../asset/images/menu/Menu_Nu.jpg";
import menuPhuKienImg from "../../../../asset/images/menu/Menu_Phu-kien.jpg";
import menuSaleImg from "../../../../asset/images/menu/Menu_Sale-off.jpg";

const cx = classNames.bind(styles);
function Navbar() {
    let id = 0;
    const navigate = useNavigate();
    const [showDropMenu, setShowDropMenu] = useState(false);
    const [headerTitle, setHeaderTitle] = useState([]);
    const [categorys, setCategorys] = useState([]);

    const getCategory = async () => {
        try {
            const res = await categoryService.getCategory();
            setCategorys(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    const navList = [
        {
            id: id++,
            title: "SẢN PHẨM",
            children: {
                data: [
                    {
                        id: id++,
                        image: menuNamImg,
                        title: "CHO NAM",
                    },
                    {
                        id: id++,
                        image: menuNuImg,
                        title: "CHO NỮ",
                    },
                    {
                        id: id++,
                        image: menuPhuKienImg,
                        title: "OUTLET SALE",
                    },
                    {
                        id: id++,
                        image: menuSaleImg,
                        title: "THỜI TRANG PHỤ KIỆN",
                    },
                ],
            },
        },

        {
            id: id++,
            title: "NAM",
            children: {
                data: [
                    {
                        id: id++,
                        title: "NỔI BẬT",
                        children: {
                            data: [
                                {
                                    id: id++,
                                    titleHeaderList: "Sale off",
                                    children: {
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    1
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                                {
                                    titleHeaderList: "Bộ sản phẩm",
                                    children: {
                                        id: id++,
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    4
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                            ],
                        },
                    },
                    {
                        id: id++,
                        title: "GIÀY",
                        children: {
                            data: [
                                {
                                    id: id++,
                                    titleHeaderList: "Dòng sản phẩm",
                                    children: {
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    3
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                                {
                                    titleHeaderList: "Style",
                                    children: {
                                        id: id++,
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    2
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                            ],
                        },
                    },
                    {
                        id: id++,
                        title: "THỜI TRANG VÀ PHỤ KIỆN",
                        children: {
                            data: [
                                {
                                    id: id++,
                                    titleHeaderList: "Nửa trên",
                                    children: {
                                        data: [
                                            {
                                                id: id++,
                                                title: "Basic Tee",
                                            },
                                            {
                                                id: id++,
                                                title: "Graphic Tee",
                                            },
                                            {
                                                id: id++,
                                                title: "Sweatshirt ",
                                            },
                                            {
                                                id: id++,
                                                title: "Hoodie ",
                                            },
                                        ],
                                    },
                                },
                                {
                                    titleHeaderList: "Phụ kiện",
                                    children: {
                                        data: [
                                            {
                                                id: id++,
                                                title: "Nón",
                                            },
                                            {
                                                id: id++,
                                                title: "Dây giày",
                                            },
                                            {
                                                id: id++,
                                                title: "Vớ",
                                            },
                                            {
                                                id: id++,
                                                title: "Ba lô & Túi",
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },

        {
            id: id++,
            title: "NỮ",
            children: {
                data: [
                    {
                        id: id++,
                        title: "NỔI BẬT",
                        children: {
                            data: [
                                {
                                    id: id++,
                                    titleHeaderList: "Sale off",
                                    children: {
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    1
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                                {
                                    titleHeaderList: "Bộ sản phẩm",
                                    children: {
                                        id: id++,
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    4
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                            ],
                        },
                    },
                    {
                        id: id++,
                        title: "GIÀY",
                        children: {
                            data: [
                                {
                                    id: id++,
                                    titleHeaderList: "Dòng sản phẩm",
                                    children: {
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    3
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                                {
                                    titleHeaderList: "Style",
                                    children: {
                                        id: id++,
                                        data: categorys
                                            .filter((item) => {
                                                if (
                                                    item.fk_category_group_id ===
                                                    2
                                                ) {
                                                    return true;
                                                }
                                            })
                                            .slice(0, 5),
                                    },
                                },
                            ],
                        },
                    },
                    {
                        id: id++,
                        title: "THỜI TRANG VÀ PHỤ KIỆN",
                    },
                ],
            },
        },

        {
            id: id++,
            title: "SALE OFF",
        },
        {
            id: id++,
            title: "DiscoverYOU",
        },
    ];

    const [history, setHistory] = useState([{ title: "", data: navList }]);
    const currentMenu = history[history.length - 1];

    const handleShowMenu = () => {
        setShowDropMenu((pre) => !pre);
    };

    useEffect(() => {
        setHistory([{ title: "", data: navList }]);
    }, [categorys]);

    const handleAddChildMenu = (item) => {
        //Open children menu when is mobile
        if (window.innerWidth < 992) {
            //Add child if have
            if (item.children && !item.titleHeaderList) {
                setHistory([
                    ...history,
                    { data: item.children.data, title: item.title },
                ]);
                setHeaderTitle([...headerTitle, item.title]);
            }
            //navigate page when not have child
            else {
                navigate(config.routes.product);
            }
        } else {
            navigate(config.routes.product);
        }
    };

    const handleBackMenu = () => {
        setHistory((preHistory) => preHistory.slice(0, preHistory.length - 1));
        setHeaderTitle((preHeaderTitle) =>
            preHeaderTitle.slice(0, preHeaderTitle.length - 1)
        );
    };

    const detectResize = () => {
        if (window.innerWidth >= 992) {
            setHistory((preHistory) => preHistory.slice(0, 1));
        }
    };

    useEffect(() => {
        window.addEventListener("resize", detectResize);
        return () => {
            window.removeEventListener("resize", detectResize);
        };
    }, []);

    return (
        <div className={cx("container-fluid px-0", "wrapper")}>
            <div className={cx("row g-0", "navbar")}>
                <div
                    className={cx(
                        "col-2 col-xl-1 col-lg-2 col-md-2 col-sm-2",
                        "brand"
                    )}
                >
                    <img src={logo} className={cx("logo")} alt="logo" />
                </div>

                <div
                    className={cx("col-xl-8 col-lg-10", "navbar-nav", {
                        show: showDropMenu,
                    })}
                >
                    <ul className={cx("nav-list")}>
                        {history.length > 1 && (
                            <li className={cx("dropdown", "dropdown-mobile")}>
                                <div
                                    onClick={handleBackMenu}
                                    className={cx(
                                        "dropdown-link",
                                        "dropdown-link_mobile"
                                    )}
                                >
                                    <KeyboardArrowDownIcon
                                        className={cx("header-mobile_icon")}
                                    />
                                    <div className={cx("header-mobile_title")}>
                                        {history.map((item, index) => (
                                            <span
                                                className={cx({
                                                    disable:
                                                        history.length > 2 &&
                                                        history.length - 1 !==
                                                            index &&
                                                        item.title !== "",
                                                })}
                                            >
                                                {item.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        )}
                        {currentMenu.data.map((item, index) => {
                            return (
                                <>
                                    {/* List item  */}
                                    <li
                                        key={index}
                                        className={cx("dropdown")}
                                        onClick={() => handleAddChildMenu(item)}
                                    >
                                        <div className={cx("dropdown-link")}>
                                            {item.titleHeaderList && (
                                                <span
                                                    className={cx(
                                                        "dropdown-title",
                                                        "title-mobile_header-list"
                                                    )}
                                                >
                                                    {item.titleHeaderList}
                                                </span>
                                            )}
                                            {index <
                                                currentMenu.data.length - 1 && (
                                                <span
                                                    className={cx(
                                                        "dropdown-title"
                                                    )}
                                                >
                                                    {item.title ||
                                                        item.category_title}
                                                </span>
                                            )}

                                            {/* Change image to text */}
                                            {index ===
                                                currentMenu.data.length - 1 && (
                                                <>
                                                    <span
                                                        className={cx(
                                                            "d-block d-xxl-none d-xl-none d-lg-none",
                                                            "dropdown-title",
                                                            "title-hide"
                                                        )}
                                                    >
                                                        {item.title}
                                                    </span>
                                                    <img
                                                        className={cx(
                                                            "d-none d-xxl-block d-xl-block d-lg-block",
                                                            "dropdown-image"
                                                        )}
                                                        src={imageDiscoverYou}
                                                        alt=""
                                                    />
                                                </>
                                            )}

                                            {item.children &&
                                                !item.titleHeaderList && (
                                                    <>
                                                        <KeyboardArrowDownIcon
                                                            className={cx(
                                                                "dropdown-icon"
                                                            )}
                                                        />
                                                        <div
                                                            className={cx(
                                                                "arrow"
                                                            )}
                                                        ></div>
                                                    </>
                                                )}
                                            {/* Last position of navList */}
                                        </div>
                                        {index === 0 && (
                                            <DropDownMenu
                                                menu1
                                                className={cx("dropdown-menu")}
                                                data={navList}
                                            />
                                        )}
                                        {index > 0 && index < 3 && (
                                            <DropDownMenu
                                                className={cx("dropdown-menu")}
                                                data={navList}
                                            />
                                        )}
                                    </li>
                                    {/* Last list item */}
                                    {item.titleHeaderList &&
                                        item.children.data.map(
                                            (itemChild, index) => (
                                                <li
                                                    className={cx("dropdown")}
                                                    onClick={() =>
                                                        handleAddChildMenu(item)
                                                    }
                                                >
                                                    <div
                                                        className={cx(
                                                            "dropdown-link"
                                                        )}
                                                    >
                                                        <span
                                                            key={index}
                                                            className={cx(
                                                                "dropdown-title"
                                                            )}
                                                        >
                                                            {itemChild.category_title ||
                                                                itemChild.title}
                                                        </span>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                </>
                            );
                        })}
                    </ul>
                    <Menu className={cx("menu-mobile")} />
                </div>

                <div
                    className={cx(
                        "col-8 col-xl-3 col-lg-12 col-md-8 col-sm-8",
                        "navbar-search"
                    )}
                >
                    <div className={cx("form-control")}>
                        <div className={cx("icon")}>
                            <SearchIcon className={cx("icon-search")} />
                        </div>
                        <input
                            className={cx("search-input")}
                            type="text"
                            placeholder="Tìm kiếm "
                        />
                    </div>
                </div>

                <button
                    onClick={handleShowMenu}
                    className={cx("col-2 col-md-2 col-sm-2", "btn-menu")}
                >
                    <MenuIcon className={cx("menu-icon")} />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
