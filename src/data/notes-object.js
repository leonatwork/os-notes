import React from "react";

export const notes = [
  {
    id: 0,
    title: "Introduction",
    content: (
      <div>
        <h1>Introduction</h1>
        <hr />
        <b>Operating System</b>
        <ul>
          <li>
            System software that acts as an interface between user and hardware.
          </li>
          <li>
            OS manages computer hardware (controls and coordinates hardware
            among various programs and users)
          </li>
          <li>Provides environment within which other programs can work</li>
        </ul>
        <b>Other than kernel there are two types of softwares:</b>
        <ul>
          <li>
            <b>System SW :</b> associated with OS but not part of the kernel
          </li>
          <li>
            <b>Application SW :</b> includes all programs not associated with OS
          </li>
        </ul>
        <b>Goals</b>
        <ul>
          <li>User friendly</li>
          <li>Efficiency</li>
        </ul>
        <b>Functions of OS</b>
        <ul>
          <li>Process management</li>
          <li>Memory management</li>
          <li>I/O device management</li>
          <li>File management</li>
          <li>Network management</li>
          <li>Security and protection</li>
        </ul>
        <b>Booting :</b> starting the computer by loading the kernel
        <ul>
          <li>
            Initial program or bootstrap program runs at boot time. This program
            should be simple
          </li>
          <li>
            It is stored in ROM or EEPROM and is known as firmware within the
            computer hardware
          </li>
          <li>It initializes all aspects of system</li>
          <li>
            Bootstrap must know how to load the OS. For this bootstrap must
            locate and load the OS kernel into memory
          </li>
        </ul>
        <b>Interrupts</b>
        <ul>
          <li>
            Occurrence of an event is signaled by an interrupt from either
            hardware or software
          </li>
          <li>Modern OSs are interrupt driven</li>
          <li>HW trigger an interrupt by sending a signal to CPU</li>
          <li>
            SW trigger an interrupt by executing a special operation called
            system call or monitor call
          </li>
          <li>
            Number of interrupts are predefined. A table of pointers to
            interrupt routine is used to increase speed
          </li>
          <li>This table is stored in low memory</li>
          <li>
            Table keeps address of ISR for various devices. This array or
            interrupt vector is indexed by a unique device number. This number
            is provided with the request
          </li>
          Trap is a SW generated interrupt caused by an error/request from the
          program
        </ul>
        <p>
          CPU is connected to device via device controller. CPU and device
          controller can execute concurrently competing for memory cycles.
          Memory controller synchronizes access to memory
        </p>
        <b>Storage structure</b>
        <ul>
          <li>RAM (Main Memory)</li>
          <li>Programs execute from Main memory</li>
          <li>Use load and store operation</li>
          <li>Load : main memory to internal registers</li>
          <li>Store : internal registers to main memory</li>
          <li>
            Instruction execution cycle (von Neumann Architecture) Fetch -{">"}{" "}
            Decode -{">"} Execute
          </li>
        </ul>
        <b>Caching :</b> copying information to faster storage system
        temporarily.
        <br />
        <br />
        <b>Storage hierarchy : </b>
        register(CMOS) -{">"} cache(SRAM) -{">"} main memory(DRAM) -{">"} disk
        storage/secondary memory(Magnetic disk)
        <br />
        <br />
        <b>Virtual memory :</b> a technique in which a program larger than size
        of main memory can be executed
        <br />
        <br />
        <b>I/O structure</b>
        <ul>
          <li>Each device controller is incharge of specific kind of device</li>
          <li>
            Device controller have buffer storage and set of special purpose
            registers
          </li>
          <ul>
            <li>
              I/O interrupts
              <ul>
                <li>
                  Starting IO operations
                  <ul>
                    <li>
                      CPU loads appropriate registers in device controller based
                      on which dc takes action
                    </li>
                    <li>
                      Once complete the dc lets it known to CPU by triggering an
                      interrupt
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Synchronous IO
              <ul>
                <li>Control returned to IO process at IO completion</li>
                <li>Till then process is moved to waiting phase</li>
              </ul>
            </li>
            <li>
              Asynchronous IO
              <ul>
                <li>
                  Control returned to IO process without waiting for IO
                  completion
                </li>
                <li>
                  Device status table is used to keep track of IO devices. Table
                  entry tells (device's type, address and state)
                </li>
                <li>
                  If other process requests the busy device then it is put in
                  wait queue
                </li>
                <li>
                  On completion interrupt is triggered and table is updated
                </li>
              </ul>
            </li>
          </ul>
        </ul>
        <b>DMA structure</b>
        <ul>
          <li>Used for high speed IO devices</li>
          <li>
            Device controller set DMA controller registers to use appropriate
            source and destination addresses
          </li>
          <li>OS finds a buffer for transfer</li>
          <li>
            The device controller transfers a block of data directly to/from its
            own buffer storage to memory without CPU intervention.
          </li>
          <li>CPU can perform other tasks during this</li>
          <li>Once transfer is complete DMA controller interrupts the CPU</li>
        </ul>
        <hr />
        <h4>Computer System Architecture</h4>
        <ol>
          <li>
            <b>Single processor system :</b> 1 CPU
          </li>
          <li>
            <b>Multi processor system :</b> Multiple processors sharing
            resources like bus, clock, memory, peripherals... Adv is graceful
            degradation - incase of failure some system available to respond,
            but some slow down occurs.
            <ul>
              <li>
                Tandem system : 2 identical processors (Primary+Backup) if
                failure backup activated
              </li>
              <li>
                SMP (Symmetric Multiprocessing system) - each processor runs
                identical copy of OS
              </li>
              <li>
                Asymmetric MP - each system assigned specific task by master
              </li>
              <li>
                Cluster systems : multiple CPU on different systems coupled
                together. Adv...high availability
              </li>
            </ul>
          </li>
        </ol>
        <hr />
        <h4>Types of OS</h4>
        <ol>
          <li>
            <b>Batch processing OS</b>
            <ul>
              <li>
                Jobs with similar needs are batched together and executed
                through processor as a group
              </li>
              <li>
                No memory hierarchy only one memory and os is present it it the
                whole time
              </li>
              <li>One cpu</li>
              <li>One operator who groups the job into batches</li>
              <li>Slow</li>
              <li>Inefficient</li>
              <li>Oldest</li>
              <li>
                Better than previous design as grouping of jobs removed the time
                needed for loading compiler
              </li>
            </ul>
          </li>
          <li>
            <b>Spooling</b>
            <ul>
              <li>Simultaneous peripheral operations online</li>
              <li>Additional disk memory is introduced</li>
              <li>
                Peripheral devices interact with disk directly and not cpu
              </li>
              <li>
                Cpu only deals with main memory which in turn deals with disk
              </li>
              <li>Cpu utilization is improved</li>
              <li>Multiple devices can interact with disk simultaneously</li>
              <li>Interactive processes possible</li>
              <li>
                But dis adv is it is uniprogramming ie. cpu waits if process
                needs for some io
              </li>
            </ul>
          </li>
          <li>
            <b>Multiprogramming OS</b>
            <ul>
              <li>Goal is max cpu utilization</li>
              <li>
                Cpu doesn't wait if process waits for io, it executes another
                ready process available in main memory
              </li>
              <li>Context switch between processes happens</li>
              <li>
                More complex management/fragmentation issues/paging required
              </li>
            </ul>
          </li>
          <li>
            <b>
              Multi tasking / time sharing / fair share / multiprogramming with
              round robin
            </b>
            <ul>
              <li>Multitasking is multiprogramming with time sharing</li>
              <li>
                Only one cpu, context switch between processes happen so fast
                that it appears as if it is running simultaneously
              </li>
              <li>High response time</li>
            </ul>
          </li>
          <li>
            <b>Multiprocessing OS</b>
            <ul>
              <li>
                2 or more CPUs in a single system, sharing memory, io devices
                and system buses
              </li>
              <li>Truly parallel</li>
              <li>
                2 kinds of architecture
                <ul>
                  <li>Symmetric : all CPU same, managed by a single OS</li>
                  <li>Asymmetric : master slave</li>
                </ul>
              </li>
              <li>Increased throughput and reliability</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 1,
    title: "Process Scheduling",
    content: (
      <div>
        <h1>Process Scheduling</h1>
        <hr />
        <b>Scheduling</b>
        <ul>
          <li>
            Task of selecting a process from ready queue and allocating it to
            CPU
          </li>
          <li>Records in the queue are generally the PCBs</li>
          <li>CPU is allocated to the selected process by dispatcher</li>
        </ul>
        <b>Process</b>
        <ul>
          <li>CPU bound</li>
          <li>IO bound</li>
        </ul>
        <b>Job scheduling : </b>which job to bring into memory
        <br />
        <b>CPU scheduling : </b>which job to run if several jobs are ready
        <br />
        <br />
        <p>Process execution = CPU burst + I/O burst</p>
        <b>Scheduling</b>
        <ul>
          <li>Non preemptive / cooperative</li>
          <li>Preemptive</li>
        </ul>
        <p>
          Dispatcher is the module that gives of the CPU to the process selected
          by the short-term scheduler
        </p>
        <b>Dispatcher functions</b>
        <ul>
          <li>Switching context</li>
          <li>Switching user mode</li>
          <li>
            Jumping to proper location in the user program to restart that
            program
          </li>
        </ul>
        Dispatcher should be extremely fast because it called every time a
        context switch occurs
        <br />
        <b>Dispatch latency :</b> time it take for dispatcher to stop one
        process and start another
        <hr />
        <h4>Scheduling criteria</h4>
        <ul>
          <li>CPU utilization</li>
          <li>Throughput</li>
          <li>Turn around time</li>
          <li>Waiting time</li>
          <li>Response time</li>
        </ul>
        <b>Measurements</b>
        <ul>
          <li>
            <b>Burst time (BT):</b> time the process requires for running on
            CPU.
          </li>
          <li>
            <b>Waiting time (WT):</b> time spent by a process in ready state
            waiting for CPU.
          </li>
          <li>
            <b>Arrival time (AT):</b> time at which process arrives in ready
            state.
          </li>
          <li>
            <b>Exit time (ET):</b> when process completed its execution and
            exits the system.
          </li>
          <li>
            <b>Turn around time (TAT):</b> total time taken by a process in CPU
            (process submission to completion).
          </li>
          <li>
            <b>Response time :</b> time between a process enters the ready queue
            and get scheduled on the CPU for the first time.
          </li>
        </ul>
        <p>TAT = ET - AT = WT + BT</p>
        <b>CPU scheduling evaluation criteria</b>
        <ul>
          <li>Average waiting time</li>
          <li>Average response time</li>
          <li>CPU utilization</li>
        </ul>
        <hr />
        <h4>Algorithms</h4>
        <ol>
          <li>
            <b>FCFS (non-preemptive)</b>
            <ul>
              <li>Low throughput</li>
              <li>
                <b>Convoy effect :</b> smaller process have to wait for long
                time for bigger process to release CPU
              </li>
              <li>
                <b>Advantage :</b> simple and easy to use/understand. must be
                used for background process where execution is not urgent
              </li>
              <li>
                <b>Disadvantage :</b> convoy effect, normally higher average
                waiting time, no consideration of priority or burst time.
              </li>
              <li>Should not be used for interactive system</li>
              <li>No starvation here, as processor is unbiased</li>
            </ul>
          </li>
          <li>
            <b>SJF</b>
            <ul>
              <li>Both preemptive SRTF and non-preemptive SJF</li>
              <li>
                SRTF is optimal as it guarantees minimum average waiting time
              </li>
              <li>Better average response time than FCFS</li>
              <li>
                Cannot be implemented as we dont know burst time of a process
              </li>
              <li>
                Starvation of larger burst time process and higher response time
                (Highest response ratio next - modification of SJF to solve
                this)
              </li>
            </ul>
          </li>
          <li>
            <b>Priority Scheduling</b>
            <ul>
              <li>Both preemptive and non-preemptive</li>
              <li>
                How priority defined:
                <ul>
                  <li>
                    <b>Internally defined : </b>
                    use some measurable quantity to compute the priority. Eg.
                    time limits, memory requirements, no. of open files.
                  </li>
                  <li>
                    <b>Externally defined : </b>set by criteria that are
                    external to the OS. Eg. by user.
                  </li>
                </ul>
              </li>
              <li>
                Problem of starvation : low priority process never get access of
                CPU
              </li>
              <li>
                Solution: Aging - increasing the priority of the process that
                waits in the system for longer time
              </li>
            </ul>
          </li>
          <li>
            <b>Round Robin</b>
            <ul>
              <li>Designed specially for time sharing systems</li>
              <li>Like FCFS with preemption</li>
              <li>Time quantum/time slice (generally 10 - 100ms)</li>
              <li>Ready queue is treated as a circular queue</li>
              <li>
                In RR we need to keep in mind the time for context switching
              </li>
              <li>If time quantum is large then it will be like FCFS</li>
              <li>
                If time quantum is very small (compared to context switch time)
                then overhead
              </li>
              <li>
                Time quantum must be large with respect to context switch time
              </li>
              <li>Has higher TAT compared to SJF but better response</li>
            </ul>
          </li>
          <li>
            <b>Multilevel Queue Scheduling</b>
            <ul>
              <li>Ready queue is partitioned into several separate queues</li>
              <li>
                Processes are permanently assigned to one queue based on size,
                priority or process type.
              </li>
              <li>Each queue has its own scheduling</li>
              <li>
                There must be scheduling among queues also i.e each queue gets a
                certain amount of CPU time and within that time it executes its
                processes.
              </li>
              <li>
                Scheduling between queues are mostly implemented as fixed
                priority preemptive scheduling (in fixed priority scheduling it
                will first cater to the foreground process and then serve
                background process).
              </li>
              <li>Starvation possible</li>
            </ul>
          </li>
          <li>
            <b>Multilevel Feedback Queue</b>
            <ul>
              <li>Processes may move between queues</li>
              <li>
                Processes with different CPU-burst characteristics are now
                seperated
              </li>
              <li>
                If process uses too much CPU time it is pushed to lower priority
                queue
              </li>
              <li>
                If process waits too long in lower priority queue, it is moved
                to higher priority queue (aging prevents starvation)
              </li>
            </ul>
          </li>
        </ol>
        <hr />
        <h4>Thread Scheduling</h4>
        <ul>
          <li>OS schedules the kernel level threads</li>
          <ul>
            <li>
              <b>Local scheduling :</b> thread library decides which thread to
              put onto an available light weight process.
            </li>
            <li>
              <b>Global scheduling :</b> kernel decides which kernel thread to
              run exist.
            </li>
          </ul>
        </ul>
        <b>Contention scope</b>
        <ol>
          <li>
            <b>Process contention scope : </b>On systems with many to many or
            many to one models, the thread library schedules user level threads
            to run on available light weight processes
          </li>
          <li>
            <b>System contention scope : </b>Process of deciding which kernel
            thread to run on CPU
          </li>
        </ol>
        <b>Multiple processor scheduling (MPS)</b>
        <ul>
          <li>Multiple CPUs available, more complex</li>
          <li>
            Homogeneous processor : each process maintains its own private queue
            of processes or threads
          </li>
          <li>Load balancing to improve performance may be done</li>
          <li>Asymmetric multiprocessing (master-slave)</li>
        </ul>
        <b>Approaches to MPS</b>
        <ul>
          <li>
            We assume processors are homogeneous and have UMA-uniform memory
            access
          </li>
          <li>
            Load sharing can occur with a common ready queue
            <ul>
              <li>
                Each processor is self scheduling and selects a process from the
                common queue
              </li>
              <li>One processor is appointed as scheduler (master-slave)</li>
            </ul>
          </li>
          <li>
            Asymmetric multiprocessing is easier than SMP because only one
            machine can access the data
          </li>
          <li>But bottleneck may happen as only one is scheduling</li>
          <li>Nowaday symmetric is more used</li>
        </ul>
        <b>Processor affinity :</b> migration of a process to another processor
        is avoided because of the cost of invalidating the process and
        repopulating the processor cache.
        <ul>
          <li>
            <b>Soft affinity :</b> here OS tries to keep a process on one
            processor, but cannot guarantee that it will happen.
          </li>
          <li>
            <b>Hard affinity :</b> when OS can make a process not to migrate to
            other processors.
          </li>
        </ul>
        <b>Load balancing : </b>attempts to keep load evenly distributed across
        all processors in SMP system.
        <br />
        Migration approaches
        <ul>
          <li>
            <b>Push migration :</b>
            load on each processors are checked and then distributed evenly in
            case of any imbalance
          </li>
          <li>
            <b>Pull migration : </b> an idle processor pulls a waiting task from
            a busy processor
          </li>
        </ul>
        <p>Multicore processors have very complicated scheduling issue</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "System Calls",
    content: (
      <div>
        <h1>System Calls</h1>
        <hr />
        <ul>
          <li>Provides an interface to the services provided by the OS</li>
          <li>
            Application programmer uses API, the API makes system calls on
            behalf of programmer
          </li>
          <li>
            When a call is made, the user mode is switched to kernel mode, then
            the address of the implementation of that called function is fetched
            from a look up table and is executed
          </li>
          <li>
            Methods to pass parameters:
            <ol>
              <li>Using registers</li>
              <li>
                Via registers storing address to a block or table in memory
                holding parameters
              </li>
              <li>Via stack (parameters are pushed and popped)</li>
            </ol>
          </li>
        </ul>
        <hr />
        <h4>Types of system calls</h4>
        <ol>
          <li>
            <b>Process control</b>
            <ul>
              <li>Program may end normally or abort abnormally</li>
              <li>
                Program needs to loaded into main memory and transferred back
                once the job is done
              </li>
              <li>Creating or terminating processes</li>
              <li>
                Wait for other process to release resource, signal waiting
                processes that resource is now free
              </li>
              <li>Set or get process attributes</li>
              <li>Allocate or free memory</li>
              <li>
                For above tasks related to processes, system calls are required
              </li>
            </ul>
          </li>
          <li>
            <b>File manipulation</b>
            <ul>
              <li>create, delete, open, close, update files</li>
              <li>
                For above tasks related to files, system calls are required
              </li>
            </ul>
          </li>
          <li>
            <b>Device manipulation</b>
            <ul>
              <li>Giving access to resource</li>
              <li>Handling concurrent access to a resource</li>
              <li>Deallocating resources once the work is done</li>
              <li>Request, release, attach, detach device</li>
              <li>get, set device attribute</li>
              <li>
                For above tasks related to devices, system calls are required
              </li>
            </ul>
          </li>
          <li>
            <b>Information maintenance</b>
            <ul>
              <li>Transfer info from user program to OS</li>
              <li>get, set time,date,file,process,device attributes</li>
              <li>
                For above tasks related to information, system calls are
                required
              </li>
            </ul>
          </li>
          <li>
            <b>Communication</b>
            <ul>
              <li>
                2 models for inter process communication
                <ol>
                  <li>
                    Message passing
                    <ul>
                      <li>Useful when small amount of data</li>
                      <li>Easier to implement</li>
                    </ul>
                  </li>
                  <li>
                    Shared memory
                    <ul>
                      <li>Great speed</li>
                      <li>
                        Protection and synchronization problem for shared area
                        access
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ul>
          </li>
          <li>
            <b>Protection</b>
            <ul>
              <li>Mechanism for controlling resources</li>
              <li>Specially when connected over a network</li>
            </ul>
          </li>
        </ol>
        <hr />
        <h4>Dual mode operation</h4>
        <ul>
          <li>User mode & kernel/monitor mode</li>
          <li>Mode bit 0 : task executed on behalf of OS</li>
          <li>Mode bit 1 : task executed on behalf of user</li>
          <li>
            Dual mode protects errant access to privileged locations which may
            harm the systems integrity.
          </li>
          <li>Privileged instruction can only be executed in monitor mode.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Designing OS",
    content: (
      <div>
        <h1>Designing OS</h1>
        <hr />
        <ul>
          <li>No ideal solution exists</li>
          <li>
            Depends on requirements (like real time, large scale, scientific)
          </li>
          <li>User goals : fast,reliable, easy to use</li>
          <li>
            System goal : easy to design,maintain and implement, error free
          </li>
          <li>
            Design goals: convenience, reliable, fast, flexible and efficient
          </li>
        </ul>
        <p>
          <b>Policy : </b>determines what is to be done
          <br />
          <b>Mechanism : </b>determines how it is to be done
        </p>
        <p>
          Earlier OS was mostly implemented in machine language (adv. less
          storage and fast OS). But now we use high level languages like C/C++
          (adv. fast to develop but slow OS and inc. storage)
        </p>
        <hr />
        <h4>Structures of design</h4>
        <ol>
          <li>
            <b>Simple</b>
            <ul>
              <li>MS-DOS, UNIX initially</li>
            </ul>
          </li>
          <li>
            <b>Layered (modularity)</b>
            <ul>
              <li>n layers from hardware to the UI</li>
            </ul>
          </li>
          <li>
            <b>Microkernel</b>
            <ul>
              <li>
                Unnecessary features are removed from kernel and made into
                system and user programs
              </li>
              <li>Smaller kernel size</li>
              <li>Ease of extending OS services by adding to user programs</li>
            </ul>
          </li>
          <li>
            <b>Modules</b>
            <ul>
              <li>Kernel modules implemented</li>
              <li>OO approach</li>
              <li>
                Each core component is separate and talks with others using
                interfaces
              </li>
            </ul>
          </li>
          <li>
            <b>Virtual machine</b>
            <ul>
              <li>
                VM is an isolated computing environment created by abstracting
                resources from a physical machine.
              </li>
              <li>
                Creates illusion of multiple processors but resources are
                actually shared.
              </li>
              <li>
                <b>Normal structure</b>
                <table
                  className="table table-sm table-bordered"
                  style={{ textAlign: "center", width: "150px" }}
                >
                  <tbody>
                    <tr>
                      <td>Processes</td>
                    </tr>
                    <tr>
                      <td>Kernel</td>
                    </tr>
                    <tr>
                      <td>Hardware</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <b>VM structure</b>
                <table
                  className="table table-sm table-bordered"
                  style={{ textAlign: "center", width: "260px" }}
                >
                  <tbody>
                    <tr>
                      <td>Processes</td>
                      <td>Processes</td>
                      <td>Processes</td>
                    </tr>
                    <tr>
                      <td>Kernel</td>
                      <td>Kernel</td>
                      <td>Kernel</td>
                    </tr>
                    <tr>
                      <td>VM 1</td>
                      <td>VM 2</td>
                      <td>VM 3</td>
                    </tr>
                    <tr>
                      <td colSpan="3">VM implementation</td>
                    </tr>
                    <tr>
                      <td>Hardware</td>
                      <td>Hardware</td>
                      <td>Hardware</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    title: "Process Management",
    content: (
      <div>
        <h1>Process Management</h1>
        <hr />
        <b>Program : </b>passive entity
        <br />
        <b>Process : </b>active entity
        <br />
        <br />
        Single threaded process has one program counter.
        <br />
        Multi threaded process has one program counter per thread.
        <br />
        Processes run concurrently by multiplexing the CPU
        <br />
        <br />
        <b>OS is responsible for :</b>
        <ul>
          <li>Process scheduling</li>
          <li>Process creation and termination</li>
          <li>Suspending and resuming</li>
          <li>IPC</li>
          <li>Process synchronization</li>
          <li>Deadlock prevention</li>
        </ul>
        Process is the unit of work in most systems
        <br />
        <br />
        <b>Threads</b>
        <ul>
          <li>They are lightweight processes</li>
          <li>
            Each thread of a process has its own resources but they share some
            resources also.
          </li>
        </ul>
        A process include
        <ul>
          <li>Program counter</li>
          <li>Stack</li>
          <li>Data section</li>
        </ul>
        <b>Process states</b>
        <ul>
          <li>New</li>
          <li>Running</li>
          <li>Waiting</li>
          <li>Ready</li>
          <li>Terminated</li>
        </ul>
        Scheduler Dispatch moves process from ready to running state
        <hr />
        <h4>Process Control Block (PCB)</h4>
        PCB contains Information about
        <ul>
          <li>Process state</li>
          <li>Program counter</li>
          <li>CPU registers</li>
        </ul>
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center", width: "150px" }}
        >
          <tbody>
            <tr>
              <td>Process State</td>
            </tr>
            <tr>
              <td>Process Number</td>
            </tr>
            <tr>
              <td>Program Counter</td>
            </tr>
            <tr>
              <td>Register</td>
            </tr>
            <tr>
              <td>Memory limits</td>
            </tr>
            <tr>
              <td>List of open files</td>
            </tr>
            <tr>
              <td>etc ...</td>
            </tr>
          </tbody>
        </table>
        A process migrated between various queues
        <br />
        <br />
        <b>Scheduling queues</b>
        <ul>
          <li>
            <b>Job queue :</b> as process enters a system they are put here
            <b>Ready queue :</b> processes in memory waiting for execution A
            ready queue header contains pointers to the first and last PCBs in
            the list, each PCBs of the list has a pointer to the next PCB
            <b>Device queue :</b> List of processes waiting for an I/O device
          </li>
        </ul>
        A process in execution can make
        <ul>
          <li>I/O request and would be out into the device queue</li>
          <li>A sub-process and wait for its termination</li>
          <li>Interrupted and go back to the ready queue</li>
        </ul>
        <b>Scheduler</b>
        <ul>
          <li>
            <b>Long term scheduler / Job scheduler</b>
            <ul>
              <li>
                Selects processes from pool (disk, secondary memory) and brings
                it into the main memory for execution
              </li>
            </ul>
          </li>
          <li>
            <b>Short term scheduler / CPU scheduler</b>
            <ul>
              <li>
                Selects a process among set of ready to execute processes and
                allocate CPU to it The main difference is in frequency of
                execution. (short-term = more frequent)
              </li>
            </ul>
          </li>
        </ul>
        Degree of multiprogramming (number of processes in main memory) It is
        controlled by long term scheduler
        <br />
        <br />
        <b>I/O bound processes :</b> spends more time on I/O
        <br />
        <b>CPU bound processes :</b> spends more time on doing computation
        <br />
        Long term scheduler should select processes having good mix of these two
        <br />
        <br />
        <b>Context switch</b>
        <ul>
          <li>
            Saving the state of the old process and switching to another process
          </li>
          <li>Context of process is represented by its PCB</li>
        </ul>
        <b>UNIX</b>
        <ul>
          <li>
            <b>fork :</b> system call creates a new process
            <b>exec :</b> system call used after a fork to replace the process'
            memory space with a new program
          </li>
        </ul>
        Independent process (unaffected by others) vs Cooperative process
        (affected by others)
        <hr />
        <h4>Inter Process Communication (IPC)</h4>
        <b>Message passing</b>
        <ul>
          <li>
            ProcA -{">"} Kernel -{">"} ProcB
          </li>
          <li>Passing msgs without having a shared data</li>
          <li>Messages can be fixed or variable size</li>
          <li>Send() and receive() primitives should be provided</li>
          <li>Communication link should be established</li>
          <b>Direct</b>
          <ul>
            <li>sender -{">"} receiver</li>
            <li>Sender should explicitly mention receiver's address</li>
            <li>A link exist between each pair</li>
          </ul>
          <b>Indirect</b>
          <ul>
            <li>
              sender -{">"} mailbox (ports) -{">"} receiver
            </li>
            <li>Multiple links can be present</li>
          </ul>
          <br />
          <b>Symmetric</b>
          <ul>
            <li>
              Both sender and receiver should name the other to communicate
            </li>
          </ul>
          <b>Asymmetric</b>
          <ul>
            <li>Only sender needs to name the receiver to communicate</li>
          </ul>
          <br />
          <b>Mailbox owned by a process</b>
          <ul>
            <li>The owner of the mailbox can only receive</li>
            <li>Mailbox disappears when process terminates</li>
          </ul>
          <b>Mailbox owned by OS</b>
          <ul>
            <li>Can use the mailbox for both sending and receiving</li>
            <li>
              OS allows processes to create, delete, send and receive messages
              via mailbox
            </li>
          </ul>
          <b>Synchronization</b>
          <ul>
            <li>
              <b>Blocking (sync.)</b>
              <ul>
                <li>Blocking send : sender blocked until msg is received</li>
                <li>
                  Blocking receive : receiver blocked until msg is available
                </li>
              </ul>
            </li>
            <li>
              <b>Non-blocking (async.)</b>
              <ul>
                <li>Non-blocking send : sender sends and continue</li>
                <li>
                  Non-blocking receive : receiver receives valid msg or null
                </li>
              </ul>
            </li>
          </ul>
          Rendezvous = when both send and receive are blocking
          <br />
          <br />
          <b>Buffering : </b>messages exchanged reside on a temporary queue.
          <ul>
            <li>
              zero capacity : link cant have any msg waiting in it sender
              blocked until receiver receives
            </li>
            <li>
              bounded capacity : sender blocked if full, otherwise keep on
              sending
            </li>
            <li>
              unbounded capacity : any no. of msgs can wait in queue, sender
              never blocked
            </li>
          </ul>
        </ul>
        <b>Shared memory</b>
        <ul>
          <li>
            ProcA -{">"} shared memory -{">"} ProcB
          </li>
          <li>Have a common buffer pool</li>
          <li>
            Eg. Producer consumer problem (unbounded buffer, bounded buffer)
          </li>
        </ul>
        <b>Communication in client server system</b>
        <ol>
          <li>
            <b>Socket</b>
            <ul>
              <li>Socket is an endpoint of communication</li>
              <li>Sockets are identified by IP address + port number</li>
              <li>
                Sever implement specific services (telnet, ftp, http) and
                listens to well known ports below 1024
              </li>
              <li>
                Client is assigned a port number by the host computer {">"} 1024
              </li>
              <li>Sockets are considered low level</li>
              <li>RPC and RMI are higher level</li>
            </ul>
          </li>
          <li>
            <b>RPC</b>
            <ul>
              <li>
                Msgs are well structured, contains id of function to be executed
                and its parameters
              </li>
              <li>
                RPC daemon(process that always runs in the background) listens
                to a port on remote system
              </li>
              <li>Msgs are addressed to RPC daemon</li>
              <li>
                Function is executed and reply is sent back in another message
              </li>
              <li>
                RPC provides stub (client side proxy for actual procedure to
                hide the details of communication)
              </li>
              <li>
                Stub locates the correct port on the server and marshalls the
                parameters in the correct format for transmission over network
              </li>
              <li>
                Similar stub on server side which unpacks the msg and invokes
                the procedure and returns values
              </li>
              <li>
                RPC can represent data in machine independent way using XDR
                (External Data Representation) Marshalling converts data from
                machine dependent to XDR and vice-versa
              </li>
              <li>
                <b>Binding client and server</b>
                <ul>
                  <li>
                    The port numbers can be fixed and therefore predetermined
                  </li>
                  <li>
                    Binding can also be done dynamically by matchmaker daemon
                  </li>
                </ul>
              </li>
              <li>
                <b>Steps</b>
                <ol>
                  <li>User calls kernel to send RPC msg</li>
                  <li>Kernel contacts matchmaker to find port number</li>
                  <li>Matchmaker replies to client with port number</li>
                  <li>Kernel sends RPC to the correct port</li>
                  <li>
                    Daemon listening to port for requests and then calls
                    specific procedure and return result
                  </li>
                  <li>Kernel receives it and sends back to user</li>
                </ol>
              </li>
            </ul>
          </li>
          <li>
            <b>RMI</b>
          </li>
        </ol>
        <b>Pipes : </b>it allows two processes to communicate.
        <ul>
          <li>
            <b>Ordinary pipe (named anonymous pipes on windows)</b>
            <ul>
              <li>
                Allows communication only between parent and child process
              </li>
              <li>They are unidirectional</li>
              <li>
                Eg producer-consumer : producer writes to pipe, consumer reads
                from the pipe
              </li>
            </ul>
          </li>
          <li>
            <b>Named pipe</b>
            <ul>
              <li>More powerful than ordinary pipes</li>
              <li>Allows communication between unrelated processes</li>
              <li>Bidirectional / no parent-child relationship</li>
            </ul>
          </li>
        </ul>
        <hr />
        <h4>Multi threaded programming</h4>
        <b>Thread :</b> fundamental unit of CPU utilization in multi-threaded
        programming
        <ul>
          <li>It is flow of control within a process</li>
          <li>
            Multi-threaded process contains several different flows of control
            within the same address space
          </li>
          <li>Lightweight process</li>
          <li>
            A thread has its own ID, program counter, register set and stack
          </li>
          <li>
            It shares code section, data section and other OS resources with
            threads of the same process
          </li>
          <li>
            If a process has multiple threads the it can perform more than one
            task at a time
          </li>
          <li>
            Each thread runs on separate CPU, increasing concurrency and
            parallelism
          </li>
        </ul>
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center", width: "150px" }}
        >
          <tbody>
            <tr>
              <td>T1</td>
              <td>T2</td>
              <td>T3</td>
            </tr>
            <tr>
              <td>Registers</td>
              <td>Registers</td>
              <td>Registers</td>
            </tr>
            <tr>
              <td>Stack</td>
              <td>Stack</td>
              <td>Stack</td>
            </tr>
            <tr>
              <td colSpan="3">code & data & files</td>
            </tr>
          </tbody>
        </table>
        <b>2 types of threads</b>
        <ol>
          <li>
            <b>User level threads</b>
            <ul>
              <li>Visible to a programmer but not to kernel</li>
              <li>Implemented by thread library/API</li>
              <li>Faster to create and manage as kernel doesn;t intervene</li>
              <li>
                Disadv: if the kernel is single threaded then any user level
                thread performing a blocking system call will block the entire
                process
              </li>
            </ul>
          </li>
          <li>
            <b>Kernel level threads</b>
            <ul>
              <li>OS kernel supports and manages it</li>
              <li>Slower to create and manage</li>
              <li>
                If kernel thread performs a blocking system call then it can
                schedule another thread on different core/processor
              </li>
            </ul>
          </li>
        </ol>
        <p>
          Multi threading is more efficient than multi processes
          <br />
          RPC generally multi-threaded
          <br />
          Whenever a new request comes it creates a new thread to serve it and
          again listens for other requests
        </p>
        <b>Benefits of Multi-threading</b>
        <ul>
          <li>Responsiveness</li>
          <li>Resource sharing</li>
          <li>Economy (resource sharing among processes is costly)</li>
          <li>Scalability</li>
        </ul>
        <b>Thread models</b>
        <ul>
          <li>
            <b>Many to one</b>
            <ul>
              <li>Many user level threads mapped to one kernel thread</li>
              <li>Thread management is done in user space so efficient</li>
              <li>Entire process blocks if thread makes a blocking call</li>
              <li>Multiple threads can't run in parallel on multiprocessors</li>
            </ul>
          </li>
          <li>
            <b>One to one</b>
            <ul>
              <li>Each user thread is mapped to one kernel thread</li>
              <li>
                More concurrency as other threads can run even if one thread
                makes a blocking call
              </li>
              <li>Threads can run in parallel on multiple processors</li>
              <li>
                Each new user level thread needs a corresponding kernel level
                thread (overhead, performance loss)
              </li>
            </ul>
          </li>
          <li>
            <b>Many to many</b>
            <ul>
              <li>
                Many user level threads are multiplexed to a smaller/equal
                number of threads
              </li>
              <li>Can run in parallel</li>
              <li>
                Then a thread performs a blocking call, the kernel can schedule
                another thread for execution
              </li>
            </ul>
          </li>
        </ul>
        <b>Thread Cancellation :</b> task of terminating a thread(target thread)
        <ul>
          <li>
            <b>Asynchronous cancellation</b>
            <ul>
              <li>One thread terminates target thread</li>
              <li>Target thread may not free the acquired resources</li>
            </ul>
          </li>
          <li>
            <b>Deferred cancellation</b>
            <ul>
              <li>
                Target thread can periodically check if it should terminate
              </li>
            </ul>
          </li>
        </ul>
        <b>Signal handling : </b> notifying a process/thread that some event has
        occurred
        <ul>
          <li>
            <b>Synchronous signal</b>
            <ul>
              <li>
                Signal sent to same process/thread that caused signal generation
              </li>
            </ul>
          </li>
          <li>
            <b>Asynchronous signal</b>
            <ul>
              <li>
                Signal generated by an event external to a running process
              </li>
            </ul>
          </li>
          Every signal must be handled
          <ul>
            <li>User defined signal handler</li>
            <li>Default signal handler (run by kernel)</li>
          </ul>
        </ul>
        <b>Thread pools</b>
        <ul>
          <li>
            Create a number of threads at startup and place them in a pool where
            they wait for work
          </li>
          <li>
            When server receives a request it awakens a thread and assigns work
            to it
          </li>
          <li>On completion thread returns back to the pool</li>
          <li>
            Benefits:
            <ul>
              <li>
                Faster to respond to a request as no need of new thread creation
              </li>
              <li>
                Thread pool limits the number of threads that can exist...no
                infinite growth
              </li>
            </ul>
          </li>
        </ul>
        <b>Scheduler activation</b>
        <ul>
          <li>
            There needs to be communication between user and kernel level
            threads so that appropriate number of kernel level threads are
            allocated to the application.
          </li>
          <li>
            Scheduler activation provides upcalls - a communication mechanism
            from kernel to thread library.
          </li>
          <li>
            Required to maintain the correct number of kernel level threads.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: "Process Synchronization",
    content: (
      <div>
        <h1>Process Synchronization</h1>
        <hr />
        <b>Cooperating process</b>
        <ul>
          <li>One that can affect or can be affected by other processes.</li>
          <li>
            They may share logical address space (i.e. code and data), or share
            data through files or messages through threads.
          </li>
          <li>
            Concurrent access to shared data can result in inconsistencies.
          </li>
          <li>
            There has to be orderly execution of cooperating processes to ensure
            consistency.
          </li>
        </ul>
        <b>Race condition : </b>when the outcome of the execution depends on the
        order in which data access takes place.
        <br />
        <br />
        <b>Critical section</b>
        <ul>
          <li>
            A segment of code in which a process maybe changing common
            variables, updating a table or writing a file etc.
          </li>
          <li>A section where we access the shared resource.</li>
          <li>
            Entry section : Request permission to enter the critical section
          </li>
          <li>
            Critical section : Mutually exclusive in time (no other process can
            execute in its critical section)
          </li>
          <li>Exit section : Follows the critical section</li>
          <li>Remainder section</li>
        </ul>
        <b>Solution to critical section problem must satisfy :</b>
        <ol>
          <li>
            <b>Mutual exclusion :</b> (mandatory)
            <ul>
              <li>Only one process can be in critical section.</li>
            </ul>
          </li>
          <li>
            <b>Progress :</b> (mandatory)
            <ul>
              <li>
                Only those processes which are not in the remainder section can
                enter the critical section and the selection of the process
                cannot be postponed indefinitely
              </li>
              <li>
                Only those processes interested in entering into the critical
                section should compete for it.
              </li>
            </ul>
          </li>
          <li>
            <b>Bounded waiting : </b>(optional)
            <ul>
              <li>
                There must be a bound on the number of times other processes are
                allowed to enter into the critical section after a process has
                made a request to enter in the critical section and before the
                request is granted.
              </li>
            </ul>
          </li>
        </ol>
        <b>Software solution</b>
        <ul>
          <li>
            <b>Using 2 turn variables</b>
            <ul>
              <li>Satisfies mutual exclusion</li>
              <li>
                Does NOT satisfy progress hence faulty (because of strict
                aternations even if process doesn't want to enter CS)
              </li>
            </ul>
          </li>

          <li>
            <b>Using flag variable - flag[2]</b>
            <ul>
              <li>Satisfies mutual exclusion</li>
              <li>
                Satisfies progress (no strict alternation and interest of a
                process is considered)
              </li>
              <li>
                But deadlock possible if context switch happens in entry section
                and flag become [T,T]
              </li>
            </ul>
          </li>
          <li>
            <b>Peterson's solution</b>
            <ul>
              <li>Uses both flag and turn variable</li>
              <li>
                Satisfies all 3 conditions (mutual exclusion, progress and
                bounded wait)
              </li>
              <li>
                Difficult to scale up to n-processes (solution is semaphores)
              </li>
            </ul>
          </li>
        </ul>
        <b>Peterson's solution</b>
        <ul>
          <li>Software solution that can be used to prevent race condition</li>
          <li>Two process solution</li>
          <li>
            Assumes that LOAD and STORE instructions are atomic and cannot be
            interrupted
          </li>
          <li>
            The 2 processes share two variables
            <ol>
              <li>
                int turn
                <ul>
                  <li>
                    Turn indicates whose turn it is to enter the critical
                    section
                  </li>
                </ul>
              </li>
              <li>
                boolean flag[2]
                <ul>
                  <li>
                    Flag array is used to indicate if a process is ready to
                    enter into the critical section
                  </li>
                  <li>
                    flag[i]=true implies process P<sub>i</sub> is ready
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ul>
        <b>Hardware solutions</b>
        <ul>
          <li>
            <b>Locks</b>
            <ul>
              <li>Acquiring and releasing locks</li>
              <li>
                Atomic instruction running on different CPUs will run
                sequentially
              </li>
              <li>
                <b>Semaphores</b>
                <ul>
                  <li>
                    A synchronization tool used to control access to shared
                    variables so that only one process at any point of time
                    change the value of the shared variable.
                  </li>
                  <li>
                    A semaphore S is an integer variable that is accessed only
                    through two standard atomic operations wait and signal.
                    <br />
                    <br />
                    wait(s){" {"}
                    <br />
                    while(s{"<"}=0);
                    <br /> s--;
                    <br />
                    {"}"}
                    <br />
                    <br />
                    signal(s){" {"}
                    <br />
                    s++;
                    <br />
                    {"}"}
                  </li>
                  Two types
                  <ul>
                    <li>
                      <b>Counting :</b> allows n processes to access the shared
                      resource by initializing semaphore to n n processes share
                      the semaphore(aka mutex) initialised to 1.
                    </li>
                    <li>
                      <b>Binary :</b> semaphore value only 0 or 1.
                    </li>
                  </ul>
                  <b>Mutual exclusion solution</b>
                  <p>
                    do{" {"}
                    <br />
                    wait(mutex);
                    <br />
                    critical section
                    <br />
                    signal(mutex);
                    <br />
                    {"}"} while(true);
                  </p>
                  <b>Disadvantage</b>
                  <ul>
                    <li>
                      They all require busy waiting (process trying to enter
                      critical section must loop continuously in the entry code)
                    </li>
                    <li>This wastes CPU cycle</li>
                    <li>
                      This type of semaphore is also called spinlock(because
                      process spins while waiting for lock)
                    </li>
                  </ul>
                  <b>Advantage</b>
                  <ul>
                    <li>
                      No context switch is required when a process waits for a
                      lock (useful for short period)
                    </li>
                  </ul>
                </ul>
              </li>
              <li>
                Implementing a semaphore with waiting queue can cause deadlock
                issue
              </li>
              <li>
                <b>Deadlock : </b>caused when a process in the waiting set is
                waiting for an event/resource held by another process in the
                waiting set in circular manner
              </li>
              <li>
                <b>Starvation : </b>when a process waits indefinitely within the
                semaphore
              </li>
              <li>
                <b>Priority Inversion : </b>when a high priority process needs
                data currently being accessed by lower priority process
              </li>
            </ul>
          </li>
        </ul>
        <b>Classic problems of synchronization</b>
        <ol>
          <li>
            <b>Bounded buffer problem</b>
            <ul>
              <li>
                There is a pool of n buffers each capable of holding one item
              </li>
              <li>
                Empty and full semaphores count the number of empty and full
                buffers
              </li>
              <li>
                Mutex semaphore provide mutual exclusion for access to the
                buffer pool
              </li>
            </ul>
          </li>
          <li>
            <b>Readers-writers problem</b>
            <ul>
              <li>Data is shared among number of concurrent processes</li>
              <li>Readers only read the data and do not update</li>
              <li>Writers can both read and write</li>
              <li>Many readers can access at the same time</li>
              <li>Writers need exclusive use to shared objects</li>
              <li>Both reader and writer starvation possible</li>
            </ul>
          </li>
          <li>
            <b>Dining-philosopher problem</b>
            <ul>
              <li>5 philosopher and 5 chopsticks</li>
              <li>Philosopher wither eats or thinks</li>
              <li>Semaphore chopstick[5];</li>
              <li>
                He acquires a chopstick by wait operation and releases it by
                signal operation
              </li>
              <li>No two neighbours can eat together</li>
              <li>Deadlock possible</li>
              <li>
                Sol: only pick if both are available or odd one will pick left
                chopstick first and even one will pick right chopstick first
              </li>
              <li>Starvation still possible</li>
            </ul>
          </li>
          Monitors is the solution for this problem
        </ol>
        <b>Monitors</b>
        <ul>
          <li>
            It is a high level abstraction that provides a convenient and
            effective mechanism for process synchronization
          </li>
          <li>Only one process may be active within a monitor at a time</li>
          <li>
            Monitors are needed because if all processes use semaphore and one
            process accidentally forgets to signal then all will be deadlocked
          </li>
          <li>
            Monitor is a collection of procedures, variables, and data
            structures that are grouped together in a module/package
          </li>
        </ul>
        <b>Atomicity : </b>either full operation takes place or none.
        <br />
        <b>Transaction :</b> set of operations which is successful ends with
        commit or if failed ends with abort.
        <br />
        <b>Serializability :</b> when transactions are executed serially and
        atomically.
        <br />
        <br />
        Schedule - S1
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center", width: "150px" }}
        >
          <tbody>
            <tr>
              <td>T1</td>
              <td>T2</td>
            </tr>
            <tr>
              <td>read()</td>
              <td></td>
            </tr>
            <tr>
              <td>write()</td>
              <td></td>
            </tr>
            <tr>
              <td></td>

              <td>write()</td>
            </tr>
            <tr>
              <td></td>
              <td>read()</td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>Non-serial schedule:</b> transactions can overlap
          <br />
          Conflict if in two overlapping operations on same data item and one is
          write() operation.
        </p>
        Schedule - S2
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center", width: "150px" }}
        >
          <tbody>
            <tr>
              <td>T1</td>
              <td>T2</td>
            </tr>
            <tr>
              <td>read()</td>
              <td></td>
            </tr>
            <tr>
              <td>write(A)</td>
              <td>read(A)</td>
            </tr>
            <tr>
              <td>write(A)</td>
              <td>read(B)</td>
            </tr>
            <tr>
              <td></td>
              <td>write()</td>
            </tr>
            <tr>
              <td></td>
              <td>read()</td>
            </tr>
          </tbody>
        </table>
        If O<sub>i</sub> and O<sub>j</sub> are consecutive operations of
        different transactions (S) and do not conflict then their order can be
        swapped (S') without any issue.
        <br />
        <br />S becomes S' via swapping non-conflicting operations and both are
        equivalent then S is conflict serializable.
        <br />
        <br />
        <b>Log based recovery</b>
        <ul>
          <li>
            <b>Write ahead log</b>
            <br />
            each log records describe a single operation of a transaction write
            and has these fields:
            <ol>
              <li>Transaction name</li>
              <li>Data item name (data being written)</li>
              <li>Old value</li>
              <li>New value</li>
            </ol>
            <b>Disadvantage</b>
            <ul>
              <li>For each write operation a write on log is also required.</li>
            </ul>
            <b>Recovery procedure</b>
            <ul>
              <li>undo - restore old values</li>
              <li>redo - set data to new values</li>
            </ul>
          </li>
        </ul>
        <b>Checkpoints</b>
        <ul>
          <li>
            Maintain checkpoints so it is easier to roll back to last checkpoint
            rather than going back each transaction, which is time consuming.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: "Deadlocks",
    content: (
      <div>
        <h1>Deadlocks</h1>
        <hr />
        <p>
          A deadlocked state occurs when two or more process are waiting
          indefinitely for an event that can be caused only by one of the
          waiting processes.
        </p>
        <b>Necessary conditions</b> (deadlock situation can occur if all these
        situation hold simultaneously)
        <ol>
          <li>
            <b>Mutual exclusion</b>
            <ul>
              <li>
                At least one resource should be held in non-sharable mode (i.e
                can be used by only one at a time)
              </li>
            </ul>
          </li>
          <li>
            <b>Hold and wait</b>
            <ul>
              <li>
                A process must hold at least one resource and be waiting for
                another resource held by another process
              </li>
            </ul>
          </li>
          <li>
            <b>No pre-emption</b>
            <ul>
              <li>A resource can only be released voluntarily by a process</li>
            </ul>
          </li>
          <li>
            <b>Circular wait</b>
            <ul>
              <li>
                In a set of waiting processes, all are waiting for a resource
                held by another process in the set (in a circular fashion)
              </li>
            </ul>
          </li>
          All 4 conditions must hold for a deadlock to occur
        </ol>
        <b>Resource allocation graph</b>
        <ul>
          <li>
            Vertices - Pi processes (bubble) and Rj resources (square with dots
            denoting no. of instances)
          </li>
          <li>Request edge Pi-{">"}Rj</li>
          <li>Assignment edge Ri-{">"}Pj</li>
          <li>If it contains no cycle then no deadlock</li>
          <li>
            If it contains cycle then deadlock may or may not be in deadlock
            <ul>
              <li>If only one instance per resource type then deadlock</li>
              <li>
                If several instances per resource type then possibility of
                deadlock
              </li>
            </ul>
          </li>
        </ul>
        <b>3 ways of dealing with deadlock</b>
        <ol>
          <li>Use protocols to avoid or prevent deadlock</li>
          <li>
            Allow system to enter deadlock then state, detect it and recover
          </li>
          <li>Ignore the problem and pretend that it will never occur</li>
        </ol>
        <b>Deadlock handling methods</b>
        <ul>
          <li>Prevention</li>
          <li>Avoidance</li>
          <li>Detection and recovery</li>
          <li>Ignorance / ostrich algo</li>
        </ul>
        <b>Good approaches</b>
        <ul>
          <li>
            <b>Deadlock prevention : </b>make sure at least one of the 4
            conditions cannot hold
          </li>
          <li>
            <b>Deadlock avoidance : </b>information about processes and the
            resources it requires will be given to OS in advance and OS will
            make smart decisions
          </li>
        </ul>
        <hr />
        <h4>Deadlock prevention</h4>
        <b>Mutual exclusion</b>
        <ul>
          <li>
            Only for non-sharable resources and we cannot resolve mutual
            exclusion in such case
          </li>
          <li>Sharable resources have no issue</li>
        </ul>
        <b>Hold and Wait</b>
        <ul>
          <li>
            <b>Do not hold :</b> Process requesting a resource may not hold any
            resource, before requesting something it would release all held
            resources. efficient
          </li>
          <li>
            <b>Conservative approach :</b> Process can only request resources at
            the start of execution and not in the middle. So all resources
            required should be allocated at the start itself. less efficient
          </li>
          <li>
            <b>Wait timeout :</b> a process can wait only for a certain time
            period. after which a process must release all resources
            <ul>
              <li>
                Resource utilization will be low as it will remain unutilized
                for long periods
              </li>
              <li>
                Starvation possible, a process needing several resources may
                have to wait long
              </li>
            </ul>
          </li>
        </ul>
        <b>No preemption</b>
        <ul>
          <li>Forcefull preemption</li>
          <li>
            <b>Sol1:</b> if a process holds some resources and requests another
            resource that can't be immediately allocated to it, then all
            resources currently held by it are implicitly released. The process
            is restarted only when all required resources are available.
          </li>
          <li>
            <b>Sol2:</b> If requested resource is not available, then check its
            status whether it is held by another process which is waiting. If
            this is the case, preempt the resources and give it to the
            requestor.
          </li>
        </ul>
        <b>Circular wait</b>
        <ul>
          <li>
            Impose ordering of all resource types and require that each process
            request resources in increasing or decreasing order (any one).
          </li>
          <li>
            Require that whenever a process requests an instance of resource
            type, it has released resources with lower number.
          </li>
        </ul>
        <b>Safe state</b>
        <ul>
          <li>
            A state is safe if a system can allocate resources to each process
            in some order and still avoid deadlock
          </li>
          <li>
            Safe sequence : if requested resource is free or requested resource
            by P<sub>i</sub> is held by process P<sub>j</sub> where j{"<"}i.
            When lower process frees then the higher processes can continue
          </li>
        </ul>
        <b>Resource allocation graph algorithm</b>
        <ul>
          <li>
            Claim edge : dotted edge P<sub>i</sub>-{">"}R<sub>j</sub>{" "}
            representing P<sub>i</sub> may request R<sub>j</sub>
          </li>
          <li>Request edge : when process requests a resource</li>
          <li>Assignment edge : when a resource is allocated to a process</li>
          <li>Resources must be claimed a priori in the system</li>
          <li>
            Request can only be granted if converting a request edge to
            assignment edge does not result in the formation of a cycle in the
            resource allocation graph.
          </li>
        </ul>
        <b>Bankers algorithm (for deadlock avoidance)</b>
        <ul>
          <li>
            First use bankers safety algorithm to check whether the system is in
            safe state
          </li>
          <li>
            Then use the resource request algorithm to check whether each of the
            given requests may be safely granted or not.
          </li>
          <li>
            Each process has
            <ul>
              <li>Allocation vector : no. of each resource type allocated</li>
              <li>
                Max vector : the maximum number of each resource to be used
              </li>
              <li>Need vector : outstanding resources (max - allocation)</li>
            </ul>
          </li>
          <li>Available/work vector : free resources over all processes</li>
          <li>
            Maximum resource vector : allocation vectors + available vector
          </li>
          <li>Finish vector : indicates which processes are still running</li>
          <li>
            Disadvantages
            <ul>
              <li>It requires fixed number of resources to allocate</li>
              <li>Resources may breakdown suddenly</li>
              <li>Process rarely know their max resource needs in advance</li>
              <li>
                It requires a fixed number of processes but in real life it may
                vary dynamically
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h4>Deadlock detection</h4>
        <ul>
          <li>
            Determines if deadlock has occurred. If occured the run recovery
            algorithm
          </li>
          <li>
            <b>Adv :</b> process needs not to be known in advance
          </li>
          <li>
            <b>Disadv :</b> detection and recovery schemes require overhead and
            some losses occur while recovering from deadlock
          </li>
        </ul>
        If single instance of each resource type
        <ul>
          <li>
            We maintain a wait-for graph
            <ul>
              <li>Nodes are processes</li>
              <li>
                P<sub>i</sub>-{">"}P<sub>j</sub> (P<sub>i</sub> is waiting for P
                <sub>j</sub>)
              </li>
              <li>Cycle in wait-for graph represents deadlock</li>
            </ul>
          </li>
        </ul>
        If several instances of a resource type
        <ul>
          <li>Wait-for graph not applicable</li>
          <li>
            Here we use deadlock detection algorithm with specific data
            structure
            <ul>
              <li>
                Available : vector of length m indicating no. of resources of
                each type
              </li>
              <li>
                Allocation : an n x m matrix denoting no. of resources allocated
                to each process
              </li>
              <li>
                Request : an n x m matrix indicated the current request of each
                process Request[i][j]=k -{">"} P<sub>i</sub> requests K
                instances of resource R<sub>j</sub>
              </li>
            </ul>
          </li>
        </ul>
        Issue is when to call and at what frequency to call the detection
        algorithm Recovery from deadlock.
        <br />
        Once detected
        <ul>
          <li>System admin can terminate</li>
          <li>Automatic termination</li>
        </ul>
        <b>Resource preemption</b>
        <ul>
          <li>Selecting victim (whom to abort)</li>
          <li>Rollback (go back to safe state and start again)</li>
          <li>
            Starvation (same process is selected as victim for a long time, so
            it must be picked a small no. of times)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: "Memory Management",
    content: (
      <div>
        <h1>Memory Management</h1>
        <hr />
        <ul>
          <li>
            Keeping track of which parts of memory are currently being used and
            by whom
          </li>
          <li>
            Deciding which processes are to be loaded into memory if space is
            available
          </li>
          <li>Allocating and deallocating memory space as needed</li>
          <li>
            For any program to run, it must be mapped to absolute addresses and
            loaded into memory
          </li>
          <li>CPU generates address for secondary memory (logical address)</li>
        </ul>
        <b>Basic hardware</b>
        <ul>
          <li>
            Main memory and registers can only be accessed by CPU directly
          </li>
          <li>Register access takes only one CPU cycle</li>
          <li>Main memory access take many cycles</li>
          <li>Cache sits between main memory and registers</li>
          <li>
            Protection of memory required to be ensured for correct operation
          </li>
          <li>
            A pair of Base and Limit registers define the logical(virtual)
            address space
          </li>
          <li>
            Base = 300040 (address at which a process' first block resides)
            <br />
            Suppose the process ends at address 420940 then,
            <br /> Limit = 420940 - 300040 = 120900 (logical address space)
          </li>
        </ul>
        <b>Address binding</b>
        <ul>
          <li>Binding of instructions and data to memory addresses</li>
          <li>
            Input queue : collection of processes in disk waiting to be loaded
            into memory for execution
          </li>
          <li>Processes can reside in any parts of the memory</li>
          <li>Addresses used in source program are symbolic</li>
          <li>
            Compiler binds these symbolic addresses to relocatable addresses
          </li>
          <li>
            Linkage editor/loader binds these relocatable addresses to absolute
            addresses
          </li>
        </ul>
        <b>3 stages of address binding</b>
        <ol>
          <li>
            <b>Compile time</b>
            <ul>
              <li>
                If memory location known apriori, absolute code can be generated
              </li>
              <li>Recompilation required if memory location changes</li>
            </ul>
          </li>
          <li>
            <b>Load time</b>
            <ul>
              <li>Memory location is not known at compile time</li>
              <li>It must generate relocatable addresses</li>
            </ul>
          </li>
          <li>
            <b>Execution time</b>
            <ul>
              <li>
                Binding delayed until runtime, if processes can moved in memory
                during execution
              </li>
              <li>Needs hardware support (base and limit registers)</li>
            </ul>
          </li>
        </ol>
        <p>
          <b>Logical address :</b> generated by CPU.
          <br />
          <b>Physical address :</b> one seen by memory unit, and loaded into
          memory address register of the memory.
        </p>
        <ul>
          <li>
            Compile time and load time address binding methods generate
            identical logical and physical addresses.
          </li>
          <li>
            Execution time address binding results in differing logical(virtual)
            and physical address.
          </li>
        </ul>
        <p>
          <b>Logical address space :</b> the set of all logical addresses
          generated by a program pointing to locations in secondary memory.
          <br />
          <b>Physical address space :</b> the set of all physical addresses
          corresponding to these logical addresses. Physical address points to
          location in main memory.
        </p>
        Logical address {"<"} Limit register value otherwise trap generated.
        <hr />
        <h4>MMU (memory management unit)</h4>
        <ul>
          <li>
            A hardware device that does the run-time mapping from virtual to
            physical addresses
          </li>
          <li>
            The value in relocation(base) register is added to every address
            generated by user process at the time it is sent to memory
          </li>
          <li>
            User program never sees the physical address, it works with logical
            address
          </li>
        </ul>
        logical address + relocation register value = physical address
        <br />
        <br />
        <b>Dynamic loading</b>
        <ul>
          <li>Routine is not loaded until it is called</li>
          <li>
            When executing program calls a routine, first it is checked if that
            routine is already loaded in memory or not. If not the relocatable
            linking loader is called to load the desired routine into memory
          </li>
          <li>Adv. : unused routine is never loaded</li>
        </ul>
        <b>Static linking</b>
        <ul>
          <li>
            System language libraries are treated like any other object module
            and are combined by the loader into the binary program image.
          </li>
        </ul>
        <b>Dynamic linking</b>
        <ul>
          <li>Linking is postponed until execution</li>
        </ul>
        <b>Stub : </b>a stub is found in the image for each library routine
        reference
        <ul>
          <li>It tells how to locate the library routine if already loaded</li>
          <li>
            It tells how to load the routine if not already present in memory
          </li>
          <li>
            Either way the stub replaces itself with the address of the routine
            and executes it
          </li>
          <li>
            All the processes that use language library execute only one copy of
            the library code
          </li>
        </ul>
        <p>
          Dynamic loading does not require help from OS. But, dynamic linking
          does require help from OS because only OS can tell if the required
          routine is in some other process' memory space
        </p>
        <b>Swapping</b>
        <ul>
          <li>
            Swapping of processes in between main memory and backing store(disk)
          </li>
          <li>
            Roll in, roll out : high priority process is brought into memory and
            lower priority process is sent back to disk
          </li>
          <li>Overhead of transfer time</li>
        </ul>
        <b>Protection</b>
        <ul>
          <li>Memory is contained of OS + user process</li>
          <li>OS needs to be protected from user process</li>
          <li>User process needs to be protected from other user process</li>
          <li>Use relocation(base) and limit register for protection</li>
          <li>Relocation register contains smallest physical address</li>
          <li>Limit register contains range of logical addresses</li>
          <li>
            When CPU scheduler selects a process for execution, the dispatcher
            loads the relocation and the limit registers
          </li>
          <li>
            Base {"<"}= allowed addresses {"<"} base + limit
          </li>
        </ul>
        <hr />
        <h4>Memory allocation</h4>
        <ol>
          <li>
            <b>Contiguous</b> (external fragmentation issue)
            <ol>
              <li>
                <b>Fixed size partitioning</b>
                <ul>
                  <li>
                    Internal fragmentation can also happen in this approach.
                  </li>
                  <li>
                    Partitions can be different size, but once fixed cannot be
                    changed.
                  </li>
                  <li>Divide memory into fixed partitions</li>
                  <li>Each partition has one process</li>
                  <li>
                    Degree of multiprogramming depends on no. of divisions
                  </li>
                  <li>
                    OS keeps a table to record which parts are free or allocated
                  </li>
                  <li>Not used now</li>
                  <li>Best fit performs best</li>
                </ul>
              </li>
              <li>
                <b>Variable size partitioning</b>
                <ul>
                  <li>
                    Partitions are not made initially and can change based on
                    process req.
                  </li>
                  <li>Memory is considered as one big hole</li>
                  <li>
                    When new process arrives a we find a hole large enough to
                    accommodate it
                  </li>
                  <li>The process occupies only as much space as it needs</li>
                  <li>Worst fit performs best generally</li>
                </ul>
                <b>Algorithms</b>
                <ol>
                  <li>
                    <b>First fit</b> (better and faster)
                    <ul>
                      <li>Allocate it to first hole that is big enough</li>
                    </ul>
                  </li>
                  <li>
                    <b>Best fit</b>
                    <ul>
                      <li>Allocate to smallest hole that is big enough</li>
                    </ul>
                  </li>
                  <li>
                    <b>Worst fit</b> (not as good as above two)
                    <ul>
                      <li>allocates to largest hole</li>
                    </ul>
                  </li>
                </ol>
                These algorithms suffer from external fragmentation
              </li>
            </ol>
            <b>Fragmentation</b>
            <ul>
              <li>
                <b>External fragmentation</b> (more major issue)
                <ul>
                  <li>
                    Condition when enough total memory space exists to satisfy a
                    request, but it is not contiguous.
                  </li>
                </ul>
              </li>
              <li>
                <b>Internal fragmentation</b>
                <ul>
                  <li>
                    Allocated memory may be slightly larger than the requested
                    memory, this size difference is memory internal to a
                    partition but not being used.
                  </li>
                </ul>
              </li>
              <li>
                <b>Compaction (solution)</b>
                <ul>
                  <li>
                    Free memory is combined to form contiguous large block
                  </li>
                  <li>
                    Compaction is not always possible: if relocation is static
                    and is done at assembly / load time, compaction cannot be
                    done (a static relocation does not allow contents of memory
                    to change)
                  </li>
                  <li>Simplest compaction algorithm</li>
                  <li>
                    Move all processes towards one end of memory, leaving one
                    large hole of free memory (expensive, lots of overhead)
                  </li>
                  <li>
                    Another solution is to permit the logical address space of a
                    process to be non-contiguous (paging and segmentation allows
                    this solution)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <b>Non-contiguous</b>
            <ul>
              <li>Solves external fragmentation</li>
              <b>Paging</b>
              <ul>
                <li>
                  Paging permits the physical address space of a process to be
                  non-contiguous
                </li>
                <li>
                  Traditionally support for paging has been handled by hardware
                </li>
                <li>
                  Recent design : the hardware and OS are closely integrated
                </li>
                <br />
                <li>
                  Physical memory (RAM) is broken into fixed sized blocks called
                  frames
                </li>
                <li>
                  Logical memory (backing store) is broken into same sized
                  blocks called pages (processes broken down into pages)
                </li>
                <br />
                <li>
                  When a process is to be executed, its pages are loaded into
                  any available memory frame from the backing store
                </li>
                <br />
                <li>
                  Noncontiguous frames are allocated to each page of the process
                </li>
                <li>
                  The backing store has blocks the same size as the memory
                  frames
                </li>
                <li>
                  Every address generated by the CPU is divided into two parts:
                  <ol>
                    <li>Page number (to index the page table)</li>
                    <li>Page offset</li>
                  </ol>
                </li>
                <li>
                  To generate physical address from this logical address, page
                  table is used
                </li>
                <li>Page table is present for every process</li>
                <li>Page table contains base address of each page in memory</li>
                <li>
                  Page table entry points to the frame number in physical memory
                </li>
                <li>
                  An entry in page table corresponding to a page number in
                  logical memory gives the frame number of the frame where that
                  page is stored in physical memory (main memory).
                </li>
                <li>Base address + offset = physical memory address</li>
                <li>
                  The page size defined by hardware is generally of size 2
                  <sup>n</sup>
                </li>
                <br />
                <li>
                  Paging scheme has no external fragmentation, but some internal
                  fragmentation.
                </li>
                <li>
                  A frame table contains entries for each physical page frame,
                  indicating which are allocated to which pages of which
                  process.
                </li>
                <br />
                <li>
                  Hardware support : Most OSs store a page table for each
                  process
                </li>
                <li>
                  A pointer to the page table is stored in the process control
                  block
                </li>
                <li>
                  Page table is implemented as a set of dedicated registers
                </li>
                <li>But it only works if size of page table is small</li>
                <li>
                  Page table is kept in memory and page table base register PTBR
                  points to the page table
                </li>
                <li>Two memory accesses are required to access one byte</li>
                <li>
                  To speed up this process TLB (translation lookaside buffer) is
                  provided (TLB columns -page no., frame no.)
                </li>
                <li>
                  TLB is fast lookup hardware cache (page number to frame number
                  mapping) if no match of key(page number) is found then only
                  page table is searched
                </li>
                <li>
                  TLB stores info of pages of a single process, so for every
                  context switch TLB has to be cleared
                </li>
                <li>So many frequent context switch reduces hit ratio</li>
                <br />
                <li>
                  If address if of n-bits then size of memory is 2^n * (size of
                  location) <br />2<sup>10</sup> - 1K, 2<sup>20</sup> - 1M, 2
                  <sup>30</sup> - 1G, 2<sup>40</sup> - 1T, 2<sup>50</sup> - 1P
                </li>
              </ul>
            </ul>
            <b>Protection</b>
            <ul>
              <li>
                Memory protection is achieved by protection bits for each frame
              </li>
              <li>These bits are kept in page table</li>
              <li>
                Valid-invalid bit used to check if the page being accessed is
                within the logical address space or not
              </li>
              <li>
                Illegal addresses are trapped by using the valid-invalid bit
              </li>
              <li>
                Page table length register PTLR indicates the length of the page
                table
              </li>
            </ul>
            <b>Shared pages</b>
            <ul>
              <li>It is possible to share common code</li>
              <li>The code has to be non self modifying code</li>
              <li>
                Each process has its own copy of registers and data storage
              </li>
            </ul>
            <b>Structure of page table</b>
            <ol>
              <li>
                <b>Hierarchical page table</b>
                <ul>
                  <li>AKA two level paging algorithm</li>
                  <li>
                    Known as a forward mapped page table because address
                    translation works from the outer page table inwards
                  </li>
                  <li>
                    outer page table -{">"} inner page table -{">"} memory
                  </li>
                </ul>
              </li>
              <li>
                <b>Hashed page table</b>
                <ul>
                  <li>
                    Each entry in hash table contains a linked list of elements
                    that hash to the same location
                  </li>
                  <li>
                    Each element consists of :{" "}
                    <ol>
                      <li>Virtual page number</li>
                      <li>Value of mapped page frame</li>
                      <li>Pointer to the next element in the linked list</li>
                    </ol>
                  </li>
                  <li>
                    Clustered page table : are similar to hashed page table,
                    except that each entry in the page table refers to several
                    pages (useful in case of sparse address space)
                  </li>
                </ul>
              </li>
              <li>
                <b>Inverted page table</b>
                <ul>
                  <li>One entry for each real page of memory</li>
                  <li>
                    Entry consists of the virtual address of the page stored in
                    the real memory location, with information about the process
                    that owns that page
                  </li>
                  <li>
                    This decreases memory needed to store each page table, but
                    increases time needed to search a page (hash table can be
                    used to address this issue)
                  </li>
                </ul>
              </li>
              <b>Protection</b>
              <ul>
                <li>
                  Memory protection is achieved by protection bits for each
                  frame
                </li>
                <li>These bits are kept in page table</li>
                <li>
                  Valid-invalid bit used to check if the page being accessed is
                  within the logical address space or not
                </li>
                <li>
                  Illegal addresses are trapped by using the valid-invalid bit
                </li>
                <li>
                  Page table length register PTLR indicates the length of the
                  page table
                </li>
              </ul>
              <b>Shared pages</b>
              <ul>
                <li>It is possible to share common code</li>
                <li>The code has to be non self modifying code</li>
                <li>
                  Each process has its own copy of registers and data storage
                </li>
              </ul>
              <b>Structure of page table</b>
              <ol>
                <li>
                  <b>Hierarchical page table</b>
                  <ul>
                    <li>AKA two level paging algorithm</li>
                    <li>
                      Known as a forward mapped page table because address
                      translation works from the outer page table inwards
                    </li>
                    <li>
                      outer page table -{">"} inner page table -{">"} memory
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Hashed page table</b>
                  <ul>
                    <li>
                      Each entry in hash table contains a linked list of
                      elements that hash to the same location
                    </li>
                    <li>
                      Each element consists of :{" "}
                      <ol>
                        <li>Virtual page number</li>
                        <li>Value of mapped page frame</li>
                        <li>Pointer to the next element in the linked list</li>
                      </ol>
                    </li>
                    <li>
                      Clustered page table : are similar to hashed page table,
                      except that each entry in the page table refers to several
                      pages (useful in case of sparse address space)
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Inverted page table</b>
                  <ul>
                    <li>One entry for each real page of memory</li>
                    <li>
                      Entry consists of the virtual address of the page stored
                      in the real memory location, with information about the
                      process that owns that page
                    </li>
                    <li>
                      This decreases memory needed to store each page table, but
                      increases time needed to search a page (hash table can be
                      used to address this issue)
                    </li>
                  </ul>
                </li>
              </ol>
            </ol>
            <b>Segmentation</b>
            <ul>
              <li>
                Memory management scheme that supports the user's view of memory
              </li>
              <li>Logical addresses space is a collection of segments</li>
              <li>Segments are main program, routines, stack, symbol table</li>
              <li>
                The user specifies each address by a segment name (number) and
                an offset
              </li>
              <li>
                A segment table maps two-dimensional user-defined address into
                one-dimensional physical address
              </li>
              <li>
                Each entry of the table has a segment base and segment limit
              </li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 8,
    title: "Disk Scheduling",
    content: (
      <div>
        <h1>Disk Scheduling</h1>
        <hr />
        <p>
          <b>Disk scheduling</b> : in case of multiple IO requests to different
          tracks, then which order this should be executed is decided by
          scheduling algorithm.
        </p>
        <ul>
          <li>Circular disk is called platter</li>
          <li>It rotates around spindle</li>
          <li>R/W head is attached with disk arm</li>
          <li>Disk is divided into circular tracks</li>
          <li>Tracks are divided into sectors</li>
        </ul>
        <p>
          <b>Seek time :</b> time required to move R/W head on to the desired
          track.
        </p>
        <hr />
        <h4>Scheduling Algorithms</h4>
        <ol>
          <li>
            <b>FCFS</b>
            <ul>
              <li>Inefficient</li>
            </ul>
          </li>
          <li>
            <b>SSTF (shortest seek time first) </b>
            <ul>
              <li>Serves request which is closest</li>
              <li>Efficient (usually optimal)</li>
              <li>Tie is broken in the direction of head movement</li>
              <li>
                Disadvantage overhead to calculate nearest required and
                starvation possible
              </li>
            </ul>
          </li>
          <li>
            <b>SCAN (elevator algorithm)</b>
            <ul>
              <li>
                Scan starts from one end of the disk and moves to other end and
                services all req. in path
              </li>
              <li>
                On reaching the head it changes the direction and continues
              </li>
              <li>No starvation</li>
              <li>Long wait time for just visited position is required</li>
            </ul>
          </li>
          <li>
            <b>CSCAN (circular scan)</b>
            <ul>
              <li>
                Scan starts from one end of the disk and moves to other end and
                services all req. in path
              </li>
              <li>
                On reaching end it reverses direction and reaches the other end
                NOT servicing any request
              </li>
              <li>Then again starts at step 1</li>
              <li>Provides uniform wait time</li>
            </ul>
          </li>
          <li>
            <b>LOOK</b>
            <ul>
              <li>
                Same as SCAN but instead of going to the end, it only goes to
                the last req and change direction
              </li>
              <li>Better than SCAN</li>
              <li>Overhead to find the last required</li>
            </ul>
          </li>
          <li>
            <b>CLOOK (circular look)</b>
            <ul>
              <li>LOOK + CSCAN</li>
              <li>Will satisfy req. in one direction</li>
              <li>
                Only goes to last req. and changes req and again only goes till
                the first req.
              </li>
              <li>More efficient and uniform wait time compared to CSCAN</li>
              <li>More overhead in calculations</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
];
