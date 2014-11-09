var searchIndex = {};
searchIndex['rust_git'] = {"items":[[0,"","rust_git","RustGit provides facilities for reading, manipulating and creating Git repositories."],[0,"commit","","Represents Git changesets."],[1,"Commit","rust_git::commit",""],[11,"meta","","",0],[11,"author_name","","",0],[11,"author_email","","",0],[11,"author_date","","",0],[11,"committer_name","","",0],[11,"committer_email","","",0],[11,"commit_date","","",0],[11,"message","","",0],[11,"tree_id","","",0],[11,"parent_ids","","",0],[3,"encode","",""],[3,"encode_body","",""],[3,"decode","",""],[3,"decode_body","",""],[3,"find_one","",""],[3,"find","",""],[10,"clone","","",0],[10,"fmt","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"get_meta","","",0],[0,"meta","rust_git","Meta information about Git objects."],[1,"Meta","rust_git::meta",""],[11,"id","","",1],[11,"header","","",1],[10,"clone","","",1],[10,"fmt","","",1],[10,"eq","","",1],[10,"ne","","",1],[0,"object_id","rust_git","Represents Git identifiers."],[1,"ObjectId","rust_git::object_id",""],[11,"hash","","",2],[5,"RAW_SIZE","",""],[5,"HEX_SIZE","",""],[10,"clone","","",2],[10,"fmt","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"from_string","","",2],[10,"from_bytes","","",2],[0,"object_header","rust_git","A generic header for every Git object."],[1,"ObjectHeader","rust_git::object_header",""],[11,"typ","","",3],[11,"length","","",3],[3,"decode","",""],[10,"clone","","",3],[10,"fmt","","",3],[10,"eq","","",3],[10,"ne","","",3],[10,"encode","","",3],[0,"object_type","rust_git","Represents the types of Git objects."],[2,"ObjectType","rust_git::object_type",""],[12,"Commit","","",4],[12,"Tree","","",4],[12,"Blob","","",4],[12,"Tag","","",4],[12,"Note","","",4],[3,"from_text","",""],[10,"clone","","",4],[10,"fmt","","",4],[10,"eq","","",4],[10,"ne","","",4],[10,"to_text","","",4],[0,"error","rust_git","Every rust_git error."],[2,"GitError","rust_git::error",""],[12,"CorruptRepository","","",5],[12,"CorruptCommit","","",5],[12,"NotFound","","",5],[10,"fmt","","",5],[0,"file_status","rust_git","Every index file status."],[2,"FileStatus","rust_git::file_status",""],[12,"NonExistent","","",6],[12,"Current","","",6],[12,"New","","",6],[12,"Staged","","",6],[12,"Deleted","","",6],[12,"Renamed","","",6],[12,"IndexTypeChange","","",6],[12,"Untracked","","",6],[12,"Modified","","",6],[12,"Missing","","",6],[12,"TypeChanged","","",6],[12,"Ignored","","",6],[0,"repository","rust_git","Represents the actual Git repository."],[1,"Repository","rust_git::repository",""],[11,"path","","",7],[11,"wc_path","","",7],[11,"tags","","",7],[11,"branches","","",7],[11,"references","","",7],[11,"pack_indexes","","",7],[11,"bare","","",7],[10,"open","","",7],[10,"open_bare","","",7],[0,"branch","rust_git","Represents Git branches."],[1,"Branch","rust_git::branch",""],[11,"name","","",8],[11,"canonical_name","","",8],[11,"tip_id","","",8],[11,"tracked_branch","","",8],[11,"is_remote","","",8],[11,"is_detached","","",8],[3,"tip","",""],[3,"commits","",""],[10,"is_tracking","","",8],[0,"tag_type","rust_git","Represents the types of Git tags."],[2,"TagType","rust_git::tag_type",""],[12,"Lightweight","","",9],[12,"Annotated","","",9],[12,"Signed","","",9],[10,"fmt","","",9],[10,"eq","","",9],[10,"ne","","",9],[0,"tag","rust_git","Represents Git tags."],[1,"Tag","rust_git::tag",""],[11,"meta","","",10],[11,"name","","",10],[11,"message","","",10],[11,"tagger_name","","",10],[11,"tagger_email","","",10],[11,"tag_date","","",10],[11,"tag_type","","",10],[11,"target_identifier","","",10],[10,"fmt","","",10],[10,"eq","","",10],[10,"ne","","",10],[0,"reference","rust_git","Repository references."],[1,"Reference","rust_git::reference",""],[11,"canonical_name","","",11],[11,"target_identifier","","",11],[11,"remote_name","","",11],[3,"find","",""],[10,"clone","","",11],[10,"fmt","","",11],[10,"eq","","",11],[10,"ne","","",11],[0,"blob","rust_git","Represents Git blob objects."],[1,"Blob","rust_git::blob","Represents a blob object."],[11,"meta","","",12],[11,"size","","",12],[11,"contents","","",12],[3,"encode","",""],[3,"decode","",""],[3,"decode_body","",""],[3,"find","",""],[10,"fmt","","",12],[10,"eq","","",12],[10,"ne","","",12],[10,"get_meta","","",12],[0,"object_database","rust_git","Utilities for working with the repository."],[3,"find_object_by_id","rust_git::object_database",""],[0,"commit_sort_strategy","rust_git","Specifies in which order changesets are queried."],[2,"CommitSortStrategy","rust_git::commit_sort_strategy",""],[12,"TopoLogical","","",13],[12,"MostRecent","","",13],[12,"TopologicalTime","","",13],[12,"Reverse","","",13],[0,"commit_filter","rust_git","A filter that specifies which changesets are queried."],[1,"CommitFilter","rust_git::commit_filter",""],[11,"limit","","",14],[11,"offset","","",14],[11,"sort","","",14],[11,"since","","",14],[11,"until","","",14],[10,"new","","",14]],"paths":[[1,"Commit"],[1,"Meta"],[1,"ObjectId"],[1,"ObjectHeader"],[2,"ObjectType"],[2,"GitError"],[2,"FileStatus"],[1,"Repository"],[1,"Branch"],[2,"TagType"],[1,"Tag"],[1,"Reference"],[1,"Blob"],[2,"CommitSortStrategy"],[1,"CommitFilter"]]};
initSearch(searchIndex);