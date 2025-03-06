import IconBrandGithub from '~icons/tabler/brand-github';
import IconBrandGitLab from '~icons/tabler/brand-gitlab';
import IconMountain from '~icons/tabler/mountain';

export const config = {
    baseUrl: "https://tenseventyseven.xyz/",
    siteName: "tenseventyseven",
    description: "The official website of tenseventyseven, John Vincent Corcega.",

    // Open source profiles
    headerLinks: [
        {
            icon: IconBrandGithub,
            name: "GitHub",
            url: "https://github.com/TenSeventy7",
        },
        {
            icon: IconBrandGitLab,
            name: "GitLab",
            url: "https://gitlab.com/TenSeventy7",
        },
        {
            icon: IconMountain,
            name: "Codeberg",
            url: "https://codeberg.org/TenSeventy7",
        },
    ],

    // Footer links
    footerLinks: [
        // {
        //     title: "Projects",
        //     url: "/projects",
        // },
        {
            title: "Send an Email",
            url: "mailto:kamusta@tenseventyseven.xyz",
        },
        {
            title: "Server Status",
            url: "https://status.tenseventyseven.xyz/",
        },
    ],
    
    author: "John Vincent Corcega",
};