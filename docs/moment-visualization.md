---
title: Visualizing Magnetic Moment
sidebar_label: Visualizing Moment
---
While performing non-colinear magnetic calculations, you will find a file named
`{system}.nc.xsf` in the output directory. You can open this structure file in
[XCrySDen](http://www.xcrysden.org/). XCrySDen Menu: File → Open Structure →
Open XSF. Then go to Display menu and select Forces. You may need to adjust
scaling for the force vectors, go to Modify → Force Settings and set suitable
Length factor. You can change the background color from black from the Palette
Menu which is located in the left of File menu. Here is an example output in
XCrySDen:

<picture>
  <source type="image/webp" srcset={require("/img/RuCl3.nc.webp").default} />
  <img src={require("/img/RuCl3.nc.png").default} alt="RuCl3.nc" />
</picture>
