#!/bin/sh
NAME="Kgrid"

for GRID in `seq 2 10`
do
cat > ${NAME}_${GRID}.in << EOF
System.CurrrentDirectory         ./
DATA.PATH                        /workspaces/openmx3.9/DFT_DATA19
System.Name                      Si_${GRID}

Species.Number       1
<Definition.of.Atomic.Species
   Si   Si7.0-s2p2d1   Si_PBE19
Definition.of.Atomic.Species>

Atoms.Number  2
Atoms.SpeciesAndCoordinates.Unit   Ang # Ang|AU
<Atoms.SpeciesAndCoordinates           # Unit=Ang.
     1   Si   0.000000000000  0.000000000000  0.000000000000 2.0 2.0
     2   Si   1.357500000000  1.357500000000  1.357500000000 2.0 2.0
Atoms.SpeciesAndCoordinates>
Atoms.UnitVectors.Unit             Ang #  Ang|AU
<Atoms.UnitVectors                     # unit=Ang.
  0.000000000000  2.715000000000  2.715000000000
  2.715000000000  0.000000000000  2.715000000000
  2.715000000000  2.715000000000  0.000000000000
Atoms.UnitVectors>

scf.XcType                 GGA-PBE     # LDA|LSDA-CA|LSDA-PW
scf.SpinPolarization        Off        # On|Off|NC
scf.SpinOrbit.Coupling      Off        # On|Off, default=off
scf.ElectronicTemperature  300.0       # default=300 (K)
scf.energycutoff           50          # default=150 (Ry)
scf.maxIter                200         # default=40
scf.EigenvalueSolver       band        # Recursion|Cluster|Band
scf.lapack.dste            dstevx      # dstegr|dstedc|dstevx, default=dstegr
scf.Kgrid                 ${GRID} ${GRID} ${GRID}     # means 4x4x4
scf.Mixing.Type           rmm-diisk    # Simple|Rmm-Diis|Gr-Pulay
scf.Init.Mixing.Weight     0.010       # default=0.30
scf.Min.Mixing.Weight      0.001       # default=0.001
scf.Max.Mixing.Weight      0.200       # default=0.40
scf.Mixing.History         15          # default=5
scf.Mixing.StartPulay       5          # default=6
scf.criterion             1.0e-9       # default=1.0e-6 (Hartree)
EOF

echo "Calculating ${NAME}_${GRID}"
mpirun -np 4 /workspaces/openmx3.9/work/openmx ${NAME}_${GRID}.in > ${NAME}_${GRID}.out
grep -E "Utot\s+=" ${NAME}_${GRID}.out

done
