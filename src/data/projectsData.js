import vlanImg from '../assets/vlan-project.png'
import interconnectionImg from '../assets/interconnection-project.png'
import apImg from '../assets/ap-project.png'
import cctvImg from '../assets/cctv-project.jpg'

export const projects = [
    {
        id: 1,
        slug: "vlan-configuration",
        title: "VLAN Configuration with 3 Different SSIDs",
        description: "Configuring a wireless network with three separate SSIDs using VLANs on a Ruijie Access Point. Includes hotspot implementation with a login page for user access management.",
        details: "In this project, I successfully implemented a complex wireless network infrastructure. The primary goal was to segregate network traffic into three distinct SSIDs for different user groups using VLAN (Virtual Local Area Network) tagging on a Ruijie Access Point. This setup included a centralized hotspot management system with a customized login page, ensuring secure and controlled access for all users.",
        image: vlanImg,
        tags: ["Networking", "VLAN", "Ruijie", "Hotspot"]
    },
    {
        id: 2,
        slug: "network-interconnection",
        title: "Network Interconnection & TP-Link Configuration",
        description: "End-to-end network installation from physical setup (LAN cabling) to ISP distribution and routing using TP-Link devices and Winbox/Linux management.",
        details: "This project involved the complete lifecycle of a network installation. I started with physical layer setup, including precise LAN cabling and port configuration. The core of the project was managing ISP distribution through TP-Link routing hardware and software using tools like Winbox and Linux-based CLI for advanced traffic control and network stability.",
        image: interconnectionImg,
        tags: ["LAN", "Routing", "Winbox", "TP-Link"]
    },
    {
        id: 3,
        slug: "tp-link-setup",
        title: "TP-Link Access Point Setup",
        description: "Configuring devices in Access Point, Repeater, and Router modes to optimize coverage, stability, and network traffic management.",
        details: "Focusing on wireless network optimization, I configured multiple TP-Link devices across various operating modes. By strategically placing and setting up Access Points, Repeaters, and Routers, I achieved seamless coverage and eliminated dead zones. The project emphasized traffic balancing and signal strength optimization to ensure high-performance connectivity throughout the area.",
        image: apImg,
        tags: ["AP", "Repeater", "Coverage", "WLAN"]
    },
    {
        id: 4,
        slug: "cctv-installation",
        title: "CCTV & Access Point Installation",
        description: "Implementing real-time surveillance at Graha Aparna Apartment with integrated CCTV and separated SSIDs for enhanced security and stability.",
        details: "Conducted a full-scale security and network installation at Graha Aparna Apartment. My role involved mounting and configuring a real-time CCTV surveillance system integrated with the building's network. I also implemented separated SSIDs to ensure that surveillance traffic does not interfere with resident Wi-Fi, enhancing both security and network stability for the infrastructure.",
        image: cctvImg,
        tags: ["CCTV", "Security", "WLAN", "Installation"],
        position: "object-bottom",
        docsUrl: "https://drive.google.com/drive/folders/115VceXJKz72yoy1sDh-BTxiGF4sG9MQb?usp=sharing"
    }
]
