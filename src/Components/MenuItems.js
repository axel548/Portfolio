import React from 'react';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer" >{item.icon1}</a>
                                    {item.link2 && item.icon2 ? (
                                        <a href={item.link2} target="_blank" rel="noreferrer">{item.icon2}</a>
                                    ) : null}
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.content}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
