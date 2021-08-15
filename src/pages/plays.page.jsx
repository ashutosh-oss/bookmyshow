import React from 'react'
import PlaysFilter from '../components/playsmodal/PlaysFilters.component';
import Poster from '../components/poster/poster.component';


const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
              <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Plays in Bengaluru</h2>
                   <div className="flex flex-wrap">
                   <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313463-dhpnvacrqb-portrait.jpg"
                            title="Framerose Mansion"
                            subtitle="Enjoy @Rs199/- onwards"/>
                   
                  </div>
                  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313463-dhpnvacrqb-portrait.jpg"
                            title="Framerose Mansion"
                            subtitle="Enjoy @Rs199/- onwards"/>
                   
                  </div>
                  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313463-dhpnvacrqb-portrait.jpg"
                            title="Framerose Mansion"
                            subtitle="Enjoy @Rs199/- onwards"/>
                   
                  </div>
                  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313463-dhpnvacrqb-portrait.jpg"
                            title="Framerose Mansion"
                            subtitle="Enjoy @Rs199/- onwards"/>
                   
                  </div>
                   </div>
                </div>
                <div className=" lg:w-3/12">
                    <h2 className="font-bold font-gray-800 font-2xl">Filters</h2>
                    <div>
                     <PlaysFilter title="Date"
                                  tags={["Today","Tomorrow","This Weekend"]}
                                  />
                     <PlaysFilter title="Categories"
                                  tags={["Theatres"]}
                                  />
                     <PlaysFilter title="Languages"
                                  tags={["English","Hindi","Kannada"]}
                                  />
                     <PlaysFilter title="Genres"
                                  tags={["Drama","Comedy","Historical","Online Streaming Events","Adaptation"]}
                                  />
                     <PlaysFilter title="More Filters"
                                  tags={["Online Streaming", "Kids Allowed","Outdoor Events"]}/>
                     <PlaysFilter title="Price"
                                  tags={["All", "0-500","500-1000","Above 1000"]}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Plays;
