使用@turf/turf包

> 背景：基于地图GEO Features 渲染的地图区域，MultiPolygon type的数据，计算中心点

#### 实施过程
1. 图形绘制采用直接绘制的方法，getSource("layerId") && getSource("layerId").setData(\{type: "MultiPolygon", coordinates: [][][][]\}[config])
2. coordinates中的一层数组长度，决定了绘制地图的块数，我们可以统一根据长度判断出块的大小程度，
因此可以记录最大块的中心点索引作为渲染名字使用的唯一标注点 largerCentroid （和其他区域一起渲染时使用，避免名称拥挤），
并顺序计算出每块的中心点centroids，作为单独展示时，多块分别标注名字使用，绑定到源数据，以备后续使用
3. 其次记录整体 MultiPolygon 的中心点 mainCentroid，以备单独展示此多块区域时作为主中心点使用
4. 同一个 MultiPolygon 绘制的线条，使用相同颜色，字体调小有助于缩小时候展示不显得拥挤。