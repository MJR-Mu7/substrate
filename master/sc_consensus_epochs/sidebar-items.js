initSidebarItems({"enum":[["EpochIdentifierPosition","Position of the epoch identifier."],["PersistedEpoch","Persisted epoch stored in EpochChanges."],["PersistedEpochHeader","Persisted epoch header stored in ForkTree."],["ViableEpoch","The viable epoch under which a block can be verified."],["ViableEpochDescriptor","Descriptor for a viable epoch."]],"fn":[["descendent_query","Produce a descendent query object given the client."]],"mod":[["migration","Migration types for epoch changes."]],"struct":[["EpochChanges","Tree of all epoch changes across all seen forks. Data stored in tree is the hash and block number of the block signaling the epoch change, and the epoch that was signalled at that block."],["EpochHeader","Header of epoch data, consisting of start and end slot."],["EpochIdentifier","Epoch identifier."],["GapEpochs","A pair of epochs for the gap block download validation. Block gap is created after the warp sync is complete. Blocks are imported both at the tip of the chain and at the start of the gap. This holds a pair of epochs that are required to validate headers at the start of the gap. Since gap download does not allow forks we don’t need to keep a tree of epochs."],["HeaderBackendDescendentBuilder","Wrapper to get around unconstrained type errors when implementing `IsDescendentOfBuilder` for header backends."],["IncrementedEpoch","A fresh, incremented epoch to import into the underlying fork-tree."]],"trait":[["Epoch","Epoch data, distinguish whether it is genesis or not."],["IsDescendentOfBuilder","A builder for `is_descendent_of` functions."]],"type":[["EpochChangesFor","Type alias to produce the epoch-changes tree from a block type."],["SharedEpochChanges","A shared epoch changes tree."]]});