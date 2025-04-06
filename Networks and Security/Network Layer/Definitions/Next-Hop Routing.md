Next-Hop routing is a function handled by the [[Internet Layer]] that determines the immediate next destination for a packet to reach its final destination.

When a packet is sent, the originating host only cares about its first hop, which is typically the nearest router.

It is then the responsibility if this router to decide where to send the packet next.

Each router in the network has a [[Routing Table]], which contains a set of rules that dictate how to forward packets between its different network interfaces.

