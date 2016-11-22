
app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash', 'appSettings',
function ($rootScope, $scope, $state, $location, Flash, appSettings) {

    $rootScope.theme = appSettings.theme;
    $rootScope.layout = appSettings.layout;

    var appCtrl = this;


    //avalilable themes
    $scope.themes = [
        {
            theme: "black",
            color: "skin-black",
            title: "Dark - Black Skin",
            icon: ""
        },
        {
            theme: "black",
            color: "skin-black-light",
            title: "Light - Black Skin",
            icon: "-o"
        },
        {
            theme: "blue",
            color: "skin-blue",
            title: "Dark - Blue Skin",
            icon: ""
        },
        {
            theme: "blue",
            color: "skin-blue-light",
            title: "Light - Blue Skin",
            icon: "-o"
        },
        {
            theme: "green",
            color: "skin-green",
            title: "Dark - Green Skin",
            icon: ""
        },
        {
            theme: "green",
            color: "skin-green-light",
            title: "Light - Green Skin",
            icon: "-o"
        },
        {
            theme: "yellow",
            color: "skin-yellow",
            title: "Dark - Yellow Skin",
            icon: ""
        },
        {
            theme: "yellow",
            color: "skin-yellow-light",
            title: "Light - Yellow Skin",
            icon: "-o"
        },
        {
            theme: "red",
            color: "skin-red",
            title: "Dark - Red Skin",
            icon: ""
        },
        {
            theme: "red",
            color: "skin-red-light",
            title: "Light - Red Skin",
            icon: "-o"
        },
        {
            theme: "purple",
            color: "skin-purple",
            title: "Dark - Purple Skin",
            icon: ""
        },
        {
            theme: "purple",
            color: "skin-purple-light",
            title: "Light - Purple Skin",
            icon: "-o"
        },
    ];

    //available layouts
    $scope.layouts = [
        {
            name: "Boxed",
            layout: "layout-boxed"
        },
        {
            name: "Fixed",
            layout: "fixed"
        },
        {
            name: "Sidebar Collapse",
            layout: "sidebar-collapse"
        },
    ];


    //Main menu items of the dashboard
    $scope.menuItems = [
        {
            title: "Home",
            icon: "dashboard",
            state: "home",
            hasSubMenu: false
        },
        {
            title: "Units",
            icon: "dashboard",
            state: "unit",
            hasSubMenu: false
        },
        {
            title: "Items",
            icon: "gears",
            state: "item",
            hasSubMenu: false

        },

        {
            title: "Suppliers",
            icon: "suitcase",
            state: "supplier",
            hasSubMenu: false
        },
        {
            title: "Customers",
            icon: "file-code-o",
            state: "recent",
            hasSubMenu: false
        },
        {
            title: "Shops",
            icon: "globe",
            state: "shops",
            hasSubMenu: false
        },
        {
            title: "",
            icon: "",
            state: "",
            hasSubMenu: false
        },
        {
            title: "Stocks",
            icon: "user-secret",
            state: "stocks",
            hasSubMenu: true,
            subMenuItems: [
                { title: "Opening Item Stock", state: "opening-item-stock" },
                { title: "Stock Transfer", state: "stock-transfer" },
                { title: "Stock Acceptance", state: "stock-acceptance" }
            ]
        },
        {
            title: "Purchage",
            icon: "user-secret",
            state: "purchage",
            hasSubMenu: false
        },

        {
            title: "Sales",
            icon: "user-secret",
            state: "sales",
            hasSubMenu: false
        },

        {
            title: "Cash",
            icon: "user-secret",
            state: "cash",
            hasSubMenu: true,
            subMenuItems: [
                      {
                          title: "Cash Transfer",
                          state: "about"
                      },
                      {
                          title: "Cash Aceptance",
                          state: "about"
                      }]
        },
        {
            title: "Expenses",
            icon: "graduation-cap",
            state: "expense",
            hasSubMenu: false
        },
        {
            title: "Reports",
            icon: "graduation-cap",
            state: "expense",
            hasSubMenu: true,
            subMenuItems: [
                     {
                         title: "Item Stock",
                         state: "items-tock"
                     },
                     {
                         title: "Purchase Details",
                         state: "purchase-details"
                     },
                     {
                         title: "Sales Details",
                         state: "sales-details"
                     },
                     {
                         title: "Stock Transfer Details",
                         state: "stock-transfer-details"
                     }]
        }



    ];

    //set the theme selected
    //$scope.setTheme = function (value) {
    //    $rootScope.theme = value;
    //};


    ////set the Layout in normal view
    //$scope.setLayout = function (value) {
    //    $rootScope.layout = value;
    //};


    //controll sidebar open & close in mobile and normal view
    $scope.sideBar = function (value) {
        if ($(window).width() <= 767) {
            if ($("body").hasClass('sidebar-open'))
                $("body").removeClass('sidebar-open');
            else
                $("body").addClass('sidebar-open');
        }
        else {
            if (value == 1) {
                if ($("body").hasClass('sidebar-collapse'))
                    $("body").removeClass('sidebar-collapse');
                else
                    $("body").addClass('sidebar-collapse');
            }
        }
    };

    //navigate to search page
    //$scope.search = function () {
    //    $state.go('app.search');
    //};

    console.log('getting in to the app controller');

}]);
