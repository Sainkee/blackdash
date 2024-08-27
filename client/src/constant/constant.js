import {
    FaChartPie,
    FaUsers,
    FaShoppingCart,
    FaWarehouse,
    FaCogs,
  } from "react-icons/fa";
  
  export const menuItems = [
    {
      label: "Tableaux de bord",
      icon: FaChartPie,
      submenu: [
        { label: "Submenu 1", to: "/dashboard/submenu1" },
        { label: "Submenu 2", to: "/dashboard/submenu2" },
      ],
      key: "dashboard",
    },
    {
      label: "Analytique",
      icon: FaUsers,
      submenu: [
        { label: "Submenu 1", to: "/analytics/submenu1" },
        { label: "Submenu 2", to: "/analytics/submenu2" },
      ],
      key: "analytics",
    },
    {
      label: "Commerce électronique",
      icon: FaShoppingCart,
      submenu: [
        { label: "Produit", to: "/ecommerce/product" },
        { label: "Ordre", to: "/ecommerce/orders" },
        { label: "Client", to: "/ecommerce/customers" },
        { label: "Gérer la revue", to: "/ecommerce/reviews" },
      ],
      key: "ecommerce",
    },
    {
      label: "Logistique",
      icon: FaWarehouse,
      submenu: [
        { label: "Submenu 1", to: "/logistics/submenu1" },
        { label: "Submenu 2", to: "/logistics/submenu2" },
      ],
      key: "logistics",
    },
    {
      label: "Pages frontales",
      icon: FaCogs,
      submenu: [
        { label: "Submenu 1", to: "/frontend/submenu1" },
        { label: "Submenu 2", to: "/frontend/submenu2" },
      ],
      key: "frontend",
    },
  ];
  