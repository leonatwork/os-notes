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
];
