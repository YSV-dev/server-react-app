import React from 'react'

function Auth3DBook(props) {

    let Xrot = 0;
    let Yrot = 0;
    let Zrot = -30;

    let Xpos = 0;
    let Ypos = 0;
    let Zpos = 60;

    let scale = 3;

    

    return (
        <div className="book3d" style={{                  
            transformStyle: "preserve-3d",
            transformOrigin: "center center", 
            width: "10%", 
            height: "10%", 
            alignContent: "center",
            position: 'relative', 
            top: '50%', 
            left: '50%',
            transform: `
                translateX(${Xpos}px)
                translateY(${Ypos}px)
                rotateX(${Xrot}deg) 
                rotateY(${Yrot}deg) 
                rotateZ(${Zrot}deg)
                scale(${scale})
            `
            }}>
            <div className="shape cuboid-1 cub-1">
                <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
            </div>
            <div className="shape cuboid-2 cub-2">
                <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
            </div>
            <div className="shape cuboid-3 cub-3">
                <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
            </div>
            <div className="shape cuboid-4 cub-4">
                <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
            </div>
            <div className="shape cylinder-1 cyl-1">
                <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s10">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s11">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s12">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
                <div className="face side s13">
                <div className="photon-shader" style={{backgroundColor: "rgba(255, 255, 255, 0)"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Auth3DBook
