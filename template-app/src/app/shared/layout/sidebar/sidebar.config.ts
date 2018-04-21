import { Nav } from './sidebar.type';

export class SidebarConfig {
    config: Array<Nav> =
    [
        {
            "label": "Map",
            "icon": "",
            "route": "map"
        },{
            "label": "Demos",
            "subnav": [
                {
                    "label": "Normal Page",
                    "icon": "",
                    "route": "normal"
                },{
                    "label": "Dynamic Form",
                    "icon": "",
                    "route": "demo-form"
                },{
                    "label": "Charts Demo",
                    "icon": "",
                    "route": "demo-charts"
                },{
                    "label": "Charts Tables",
                    "icon": "",
                    "route": "demo-tables"
                }
            ],
            "subnavState": "inactive"
        },{
            "label": "External Links",
            "subnav": [
                {
                    "label": "Google",
                    "icon": "",
                    "uri": "https://google.com"
                },{
                    "label": "Facebook",
                    "icon": "",
                    "uri": "https://facebook.com"
                },{
                    "label": "eBay",
                    "icon": "",
                    "uri": "https://ebay.com"
                }
            ],
            "subnavState": "inactive"
        }
    ];
}