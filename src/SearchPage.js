import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/Tune';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="CodeWithHarry"
            verified
            subs="1.49M"
            noOfVideos={1260}
            description="Programmer Think and Grow Rich"
            />
            <hr/>

            <VideoRow
            views="43K"
            subs="1.49M"
            description="NodeJs crash course in Hindi: In this video, we will see everything you need to know about Node.js in Hindi. This node js tutorial ..."
            timestamp="1 day ago"
            channel="CodeWithHarry"
            title="Node Js Tutorial in Hindi"
            image="https://i.ytimg.com/an_webp/BLl32FvcdVM/mqdefault_6s.webp?du=3000&sqp=CKi6y4YG&rs=AOn4CLDkIYHJ7JZiYQfAMG7QVMYwpNrSRQ"
            />

            <VideoRow
            views="64K"
            subs="1.49M"
            description="How much to charge your clients? Are you getting underpaid? In this video, we will discuss all these things along with a complete  ..."
            timestamp="2 days ago"
            channel="CodeWithHarry"
            title="How Much To Charge For a Site"
            image="https://i.ytimg.com/an_webp/bH58m1ipPls/mqdefault_6s.webp?du=3000&sqp=CPm5y4YG&rs=AOn4CLDQnQGFUyP4JWv3ugjomBJ3t7kURw"
            />

            <VideoRow
            views="56K"
            subs="1.49M"
            description="How much coding should I learn during school days: Here is the answer to this most asked question for school students.
            ►Check ..."
            timestamp="3 days ago"
            channel="CodeWithHarry"
            title="How much Coding to Learn during School Days?"
            image="https://i.ytimg.com/an_webp/GlfJzM4NTYs/mqdefault_6s.webp?du=3000&sqp=CPfCy4YG&rs=AOn4CLABCfgqoeR_vvA9U9zhvrqAP8j7Bw"
            />

            <VideoRow
            views="73K"
            subs="1.49M"
            description="In this video, I will talk about few tools I use to increase my productivity as a web developer.  ..."
            timestamp="3 weeks ago"
            channel="CodeWithHarry"
            title="5 Web Development Tools I Use to Increase Productivity"
            image="https://i.ytimg.com/an_webp/qEw8qlRX05A/mqdefault_6s.webp?du=3000&sqp=CICay4YG&rs=AOn4CLAvKZrjGt6i0hYKtjw4th-ILnS46w"
            />

            <VideoRow
            views="4.4M"
            subs="1.49M"
            description="Download Free Notes + Code + Practice Sheets Here:  ..."
            timestamp="10 months ago"
            channel="CodeWithHarry"
            title="C Language Tutorial For Beginners In Hindi (With Notes) 🔥"
            image="https://i.ytimg.com/an_webp/ZSPZob_1TOk/mqdefault_6s.webp?du=3000&sqp=CMOly4YG&rs=AOn4CLD0ni0cVnIrRaZYpnLdGa0Jkugf_A"
            />

            <VideoRow
            views="193K"
            subs="1.49M"
            description="Installing Windows 11 ISO using VMware. In this video, we will see how to install windows ..."
            timestamp="4 days ago"
            channel="CodeWithHarry"
            title="Windows 11 - I Installed it using VMWare (Have a look!)"
            image="https://i.ytimg.com/an_webp/sLdgEEEA1D8/mqdefault_6s.webp?du=3000&sqp=CPq8y4YG&rs=AOn4CLCXkzwtyAY4fRogV-nla_L7lIwi6A"
            />
        </div>
    )
}

export default SearchPage