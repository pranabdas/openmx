---
title: Orbital decomposition of bandstructure
sidebar_label: Orbital Projection
---
If you want to decompose the individual orbital contributions on the
bandstructure, here are the relevant keywords:

```bash title="src/SiC/SiC_Primitive_BD.in" showLineNumbers
Unfolding.Electronic.Band       on     # on|off default=off
Unfolding.LowerBound         -10.0     # default=-10 eV
Unfolding.UpperBound           6.0     # default= 10 eV
Unfolding.desired_totalnkpt     30
Unfolding.Nkpoint                4

<Unfolding.kpoint
 K 0.33333333333 0.33333333333 0.0000000000
 G 0.00000000000 0.00000000000 0.0000000000
 M 0.50000000000 0.00000000000 0.0000000000
 K 0.33333333333 0.33333333333 0.0000000000
Unfolding.kpoint>
```

The orbital contributions are saved in `{system}.unfold_orb`. In case of spin
polarized calculation, there will be `{system}.unfold_orb{up, dn}`. The sequence
of the orbitally decomposed spectral weights can be found in `{system}.out`;
look for the section *Unfolding calculation for band structure* towards the
bottom of the file.

![orbital-projection](/img/orbital-proj.png)

More details: <http://www.openmx-square.org/openmx_man3.9/node168.html>
