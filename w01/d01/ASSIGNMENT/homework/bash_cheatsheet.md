Cheatsheet about bash commands
==============================

Create a directory
------------------
Directories are created by the following command **mkdir**.  
Here, directory is the absolute or relative pathname of the directory you want to create. For example, the command

    $ mkdir mydir
Creates the directory `mydir` in the current directory. Here is another example

    $ mkdir /tmp/test-dir
This command creates the directory test-dir in the `/tmp` directory. The mkdir command produces no output if it successfully creates the requested directory.

If you give more than one directory on the command line, mkdir creates each of the directories. For example

    $ mkdir docs pub
Creates the directories docs and pub under the current directory
Create a file
-------------
The following command will create a file called newfile.txt.  

    $ touch newfile.txt
You can use **vi** editor to create ordinary files on any Unix system. You simply need to give following command

    $ vi filename
Above command would open a file with the given filename. You would need to press key i to come into edit mode. Once you are in edit mode you can start writing your content in the file as below

    This is unix file....I created it for the first time.....
    I'm going to save this content in this file.
Once you are done, do the following steps
* Press key `esc` to come out of edit mode.
* Press two keys `Shift + ZZ` together to come out of the file completely.

Now you would have a file created with filemame in the current directory.
Move a file / Move a directory / Rename a file / Rename a directory
-------------------------------------------------------------------
**mv** is used to change the name of files or directories, or to move them into other directories.

    $ mv file1 file2
Changes the name of a file from `file1` to `file2` unless `dir2` already exists, in which case `dir1` will be moved into `dir2`.

    $ mv dir1 dir2
Changes the name of a directory from `dir1` to `dir2`.

    $ mv file1 file2 dir3
Moves the files `file1` and `file2` into the directory `dir3`.
Delete a file
-------------
Use **rm** to remove files from your directory.

    $ rm foo

    $ rm letter*
The first command removed a single file. The second command removed all files beginning with the string `"letter"`.
Delete a directory
------------------
Use **rmdir** to remove a directory. For example, to remove a directory called "essays", do this:

    $ rmdir essays
A directory must be empty before it can be removed. To empty a directory, use **rm**.
Move around within a directory
------------------------------
Use the **cd** command to do more than change to a home directory: You can use it to change to any directory by specifying a valid absolute or relative path. The syntax is as follows

    $ cd dirname
Here, `dirname` is the name of the directory that you want to change to. For example, the command

    $ cd /usr/local/bin
Changes to the directory `/usr/local/bin`. From this directory you can cd to the directory `/usr/home/amrood` using the following relative path

    $ cd ../../home/amrood
See what files and directories exist
------------------------------------
To list the files and directories stored in the current directory. Use the command **ls**.  
Here is the sample output of the above command

    $ ls

    bin        hosts  lib     res.03
    ch07       hw1    pub     test_results
    ch07.bak   hw2    res.01  users
    docs       hw3    res.02  work

The command ls supports the `-l` option which would help you to get more information about the listed files

    $ ls -l
    total 1962188

    drwxrwxr-x  2 amrood amrood      4096 Dec 25 09:59 uml
    -rw-rw-r--  1 amrood amrood      5341 Dec 25 08:38 uml.jpg
    drwxr-xr-x  2 amrood amrood      4096 Feb 15  2006 univ
    drwxr-xr-x  2 root   root        4096 Dec  9  2007 urlspedia
    -rw-r--r--  1 root   root      276480 Dec  9  2007 urlspedia.tar
    drwxr-xr-x  8 root   root        4096 Nov 25  2007 usr
    drwxr-xr-x  2    200    300      4096 Nov 25  2007 webthumb-1.01
    -rwxr-xr-x  1 root   root        3192 Nov 25  2007 webthumb.php
    -rw-rw-r--  1 amrood amrood     20480 Nov 25  2007 webthumb.tar
    -rw-rw-r--  1 amrood amrood      5654 Aug  9  2007 yourfile.mid
    -rw-rw-r--  1 amrood amrood    166255 Aug  9  2007 yourfile.swf
    drwxr-xr-x 11 amrood amrood      4096 May 29  2007 zlib-1.2.3
Here is the information about all the listed columns
* First Column: represents file type and permission given on the file. Below is the description of all type of files.
* Second Column: represents the number of memory blocks taken by the file or directory.
* Third Column: represents owner of the file. This is the Unix user who created this file.
* Fourth Column: represents group of the owner. Every Unix user would have an associated group.
* Fifth Column: represents file size in bytes.
* Sixth Column: represents date and time when this file was created or modified last time.
* Seventh Column: represents file or directory name.  

In the ls -l listing example, every file line began with a d, -, or l. These characters indicate the type of file that's listed.

Prefix	| Description
:------:|------------
- |	Regular file, such as an ASCII text file, binary executable, or hard link.
b |	Block special file. Block input/output device file such as a physical hard drive.
c |	Character special file. Raw input/output device file such as a physical hard drive
d |	Directory file that contains a listing of other files and directories.
l |	Symbolic link file. Links on any regular file.
p |	Named pipe. A mechanism for interprocess communications
s |	Socket used for interprocess communication.
Check where in the directory structure you are
----------------------------------------------
Use **pwd** command to find out what directory you are working in.

    $ pwd
    /u/ma/jeremy
    $ cd homework
    $ pwd
    /u/ma/jeremy/homework
    $ ls
    assign-1 assign-2 assign-3
    $ cd
    $ pwd
    /u/ma/jeremy
Jeremy began by working in his `"home"` directory. Then he `cd`'d into his homework subdirectory. Cd means "change directory". He used `pwd` to check to make sure he was in the right place, then used `ls` to see if all his homework files were there. (They were). Then he `cd`'d back to his home directory.
For more information
--------------------
[http://www.math.utah.edu/lab/unix/unix-tutorial.html][unix-tutorial]

[unix-tutorial]: http://www.math.utah.edu/lab/unix/unix-tutorial.html "Unix Tutorial" 
