
const treeModel = `
<!-- Leaves -->
<a-entity position="0 0.2 0">
<a-entity
  position="0 0 0"
  geometry="primitive: cone; radiusBottom: 0.7;"
  material="color: #376628; roughness: .9;"></a-entity>
<a-entity
  position="0 .35 0"
  geometry="primitive: cone; radiusBottom: 0.6; height: 0.9;"
  material="color: #376628; roughness: .9;"></a-entity>
<a-entity
  position="0 .7 0"
  geometry="primitive: cone; radiusBottom: 0.45; height: 0.7;"
  material="color: #376628; roughness: .9;"></a-entity>
</a-entity>

<!-- Trunk -->
<a-entity
position="0 0 0"
geometry="primitive: cylinder; radius: 0.12;"
material="color: #6F432A"></a-entity>
`;

const makeTree = (x = 0, y = 0, z = 0, scaleX = 1, scaleY = 1, scaleZ = 1) => (`
  <a-entity position="${x} ${y} ${z}" scale="${scaleX} ${scaleY} ${scaleZ}">
    ${treeModel}
  </a-entity>
`);

const signedRandom = () => 2 * Math.random() - 1;

// Populate tree line near mountains
document.querySelector('#treeLine').innerHTML = [...Array(250).keys()].map(
  (n) => (
    makeTree(
      x = (0.1 + Math.random() * 0.02) * n - 16,
      y = 0,
      z = Math.random() * 0.2,
      scaleX = 0.08,
      scaleY = 0.08,
      scaleZ = 0.08
    )
  )
).join('\n');

// Populate ring of trees around players 
document.querySelector('#treeRing').innerHTML = [...Array(50).keys()].map(
  (n) => {
    const radius = 3.5;
    const angle = (Math.PI * 0.05 * n) % (2 * Math.PI);
    if (angle > Math.PI * 5 / 4 && angle < Math.PI * 7 / 4) return '';
    return makeTree(
      x = Math.cos(angle) * radius + (0.2 * radius * signedRandom()),
      y = 0,
      z = Math.sin(angle) * radius + (0.2 * radius * signedRandom()),
    );
  }
).join('\n');

document.querySelector('#treeRing').innerHTML += [...Array(50).keys()].map(
  (n) => {
    const radius = 6;
    const angle = (Math.PI * 0.05 * n) % (2 * Math.PI);
    if (angle > Math.PI * 5 / 4 && angle < Math.PI * 7 / 4) return '';
    return makeTree(
      x = Math.cos(angle) * radius + (0.2 * radius * signedRandom()),
      y = 0,
      z = Math.sin(angle) * radius + (0.2 * radius * signedRandom()),
    );
  }
).join('\n');
