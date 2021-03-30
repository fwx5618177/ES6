// 为彩色的立方体构建顶点、颜色和索引数据
function createCube(gl) {
//    顶点数据
    let vertexBuffer;
    vertexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    let verts = [
    //    正面
        -1.0,-1.0,1.0,
        1.0,-1.0,1.0,
        1.0,1.0,1.0,
        -1.0,1.0,1.0,
    //    背面
        -1.0,-1.0,-1.0,
        -1.0,1.0,-1.0,
        1.0,1.0,-1.0,
        1.0,-1.0,-1.0,
    //    顶面
        -1.0,1.0,-1.0,
        -1.0,1.0,1.0,
        1.0,1.0,1.0,
        1.0,1.0,-1.0,
    //    底面
        -1.0,-1.0,-1.0,
        1.0,-1.0,-1.0,
        1.0,-1.0,1.0,
        -1.0,-1.0,1.0,
    //    右面
        1.0,-1.0,-1.0,
        1.0,1.0,-1.0,
        1.0,1.0,1.0,
        1.0,-1.0,1.0,
    //    左面
        -1.0,-1.0,-1.0,
        -1.0,-1.0,1.0,
        -1.0,1.0,1.0,
        -1.0,1.0,-1.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
//    颜色数据
    let colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

    let faceColors = [
        [1.0,0.0,0.0,1.0],//正面
        [0.0,1.0,0.0,1.0],//背面
        [0.0,0.0,1.0,1.0],//顶面
        [1.0,1.0,0.0,1.0],//底面
        [1.0,0.0,1.0,1.0],//右面
        [0.0,1.0,1.0,1.0]//左面
    ];
}