/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as vscode from 'vscode';
import * as path from 'path';

let can_click: boolean = true;

function printTest(output: vscode.OutputChannel) {
  //output.clear();
  output.appendLine("GCC");
  output.appendLine("[build] In file included from /usr/include/x86_64-linux-gnu/c++/9/bits/c++allocator.h:33,");
  output.appendLine("[build]                  from /usr/include/c++/9/bits/allocator.h:46,");
  output.appendLine("[build]                  from /usr/include/c++/9/bits/stl_tree.h:64,");
  output.appendLine("[build]                  from /usr/include/c++/9/set:60,");
  output.appendLine("[build]                  from ../src/gfx/../base/../base/../base/../base/../base/GlobalIncludes.h:20,");
  output.appendLine("[build]                  from ../src/gfx/../base/../base/../base/../base/MachineTypes.h:9,");
  output.appendLine("[build]                  from ../src/gfx/../base/../base/../base/BaseDefines.h:10,");
  output.appendLine("[build]                  from ../src/gfx/../base/../base/BaseHeader.h:10,");
  output.appendLine("[build]                  from ../src/gfx/../base/Logger.h:10,");
  output.appendLine("[build]                  from ../src/gfx/Atlas.cpp:1:");
  output.appendLine("[build] /usr/include/c++/9/ext/new_allocator.h: In instantiation of ‘void __gnu_cxx::new_allocator<_Tp>::construct(_Up*, _Args&& ...) [with _Up = BR2::AtlasSprite; _Args = {std::shared_ptr<BR2::Atlas>}; _Tp = BR2::AtlasSprite]’");
  output.appendLine("[build] /usr/include/c++/9/bits/alloc_traits.h:482:2:   required from ‘static void std::allocator_traits<std::allocator<_Tp1> >::construct(std::allocator_traits<std::allocator<_Tp1> >::allocator_type&, _Up*, _Args&& ...) [with _Up = BR2::AtlasSprite; _Args = {std::shared_ptr<BR2::Atlas>}; _Tp = BR2::AtlasSprite; std::allocator_traits<std::allocator<_Tp1> >::allocator_type = std::allocator<BR2::AtlasSprite>]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr_base.h:548:39:   required from ‘std::_Sp_counted_ptr_inplace<_Tp, _Alloc, _Lp>::_Sp_counted_ptr_inplace(_Alloc, _Args&& ...) [with _Args = {std::shared_ptr<BR2::Atlas>}; _Tp = BR2::AtlasSprite; _Alloc = std::allocator<BR2::AtlasSprite>; __gnu_cxx::_Lock_policy _Lp = __gnu_cxx::_S_atomic]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr_base.h:679:16:   required from ‘std::__shared_count<_Lp>::__shared_count(_Tp*&, std::_Sp_alloc_shared_tag<_Alloc>, _Args&& ...) [with _Tp = BR2::AtlasSprite; _Alloc = std::allocator<BR2::AtlasSprite>; _Args = {std::shared_ptr<BR2::Atlas>}; __gnu_cxx::_Lock_policy _Lp = __gnu_cxx::_S_atomic]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr_base.h:1344:71:   required from ‘std::__shared_ptr<_Tp, _Lp>::__shared_ptr(std::_Sp_alloc_shared_tag<_Tp>, _Args&& ...) [with _Alloc = std::allocator<BR2::AtlasSprite>; _Args = {std::shared_ptr<BR2::Atlas>}; _Tp = BR2::AtlasSprite; __gnu_cxx::_Lock_policy _Lp = __gnu_cxx::_S_atomic]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr.h:359:59:   required from ‘std::shared_ptr<_Tp>::shared_ptr(std::_Sp_alloc_shared_tag<_Tp>, _Args&& ...) [with _Alloc = std::allocator<BR2::AtlasSprite>; _Args = {std::shared_ptr<BR2::Atlas>}; _Tp = BR2::AtlasSprite]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr.h:701:14:   required from ‘std::shared_ptr<_Tp> std::allocate_shared(const _Alloc&, _Args&& ...) [with _Tp = BR2::AtlasSprite; _Alloc = std::allocator<BR2::AtlasSprite>; _Args = {std::shared_ptr<BR2::Atlas>}]’");
  output.appendLine("[build] /usr/include/c++/9/bits/shared_ptr.h:717:39:   required from ‘std::shared_ptr<_Tp> std::make_shared(_Args&& ...) [with _Tp = BR2::AtlasSprite; _Args = {std::shared_ptr<BR2::Atlas>}]’");
  output.appendLine("[build] ../src/gfx/Atlas.cpp:171:83:   required from here");
  output.appendLine("[build] /usr/include/c++/9/ext/new_allocator.h:145:20: error: no matching function for call to ‘BR2::AtlasSprite::AtlasSprite(std::shared_ptr<BR2::Atlas>)’");
  output.appendLine("[build]   145 |  noexcept(noexcept(::new((void *)__p)");
  output.appendLine("[build]       |                    ^~~~~~~~~~~~~~~~~~");
  output.appendLine("[build]   146 |        _Up(std::forward<_Args>(__args)...)))");
  output.appendLine("[build]       |        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  output.appendLine("[build] In file included from ../src/gfx/Atlas.cpp:7:");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:28:3: note: candidate: ‘BR2::AtlasSprite::AtlasSprite(BR2::Atlas*)’");
  output.appendLine("[build]    28 |   AtlasSprite(Atlas* pa) : _pAtlas(pa) {}");
  output.appendLine("[build]       |   ^~~~~~~~~~~");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:28:22: note:   no known conversion for argument 1 from ‘std::shared_ptr<BR2::Atlas>’ to ‘BR2::Atlas*’");
  output.appendLine("[build]    28 |   AtlasSprite(Atlas* pa) : _pAtlas(pa) {}");
  output.appendLine("[build]       |               ~~~~~~~^~");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:25:7: note: candidate: ‘BR2::AtlasSprite::AtlasSprite(const BR2::AtlasSprite&)’");
  output.appendLine("[build]    25 | class AtlasSprite {");
  output.appendLine("[build]       |       ^~~~~~~~~~~");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:25:7: note:   no known conversion for argument 1 from ‘std::shared_ptr<BR2::Atlas>’ to ‘const BR2::AtlasSprite&’");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:25:7: note: candidate: ‘BR2::AtlasSprite::AtlasSprite(BR2::AtlasSprite&&)’");
  output.appendLine("[build] ../src/gfx/../gfx/Atlas.h:25:7: note:   no known conversion for argument 1 from ‘std::shared_ptr<BR2::Atlas>’ to ‘BR2::AtlasSprite&&’                                                                                                                                                                                                                                                                                                  ");

  //Clang
  output.appendLine("");
  output.appendLine("CLANG");
  output.appendLine("[build] /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/shared_ptr.h:358:2: note: candidate template ignored: could not match '_Sp_alloc_shared_tag' against 'unique_ptr'");
  output.appendLine("[build]         shared_ptr(_Sp_alloc_shared_tag<_Alloc> __tag, _Args&&... __args)");
  output.appendLine("[build]         ^");
  output.appendLine("[build] /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/shared_ptr.h:139:2: note: explicit constructor is not a candidate");
  output.appendLine("[build]         shared_ptr(_Yp* __p) : __shared_ptr<_Tp>(__p) { }");
  output.appendLine("[build]         ^");
  output.appendLine("[build] /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/shared_ptr.h:275:11: note: explicit constructor is not a candidate");
  output.appendLine("[build]         explicit shared_ptr(const weak_ptr<_Yp>& __r)");
  output.appendLine("[build]                  ^");
  output.appendLine("[build] In file included from ../src/gfx/Atlas.cpp:1:");
  output.appendLine("[build] In file included from ../src/gfx/../base/Logger.h:10:");
  output.appendLine("[build] In file included from ../src/gfx/../model/../base/BaseHeader.h:10:");
  output.appendLine("[build] In file included from ../src/gfx/../base/../base/BaseDefines.h:10:");
  output.appendLine("[build] In file included from ../src/gfx/../math/../base/MachineTypes.h:9:");
  output.appendLine("[build] In file included from ../src/gfx/../base/../base/GlobalIncludes.h:20:");
  output.appendLine("[build] In file included from /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/set:60:");
  output.appendLine("[build] In file included from /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/stl_tree.h:64:");
  output.appendLine("[build] In file included from /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/allocator.h:46:");
  output.appendLine("[build] In file included from /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/x86_64-linux-gnu/c++/9/bits/c++allocator.h:33:");
  output.appendLine("[build] /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/ext/new_allocator.h:146:8: error: no matching constructor for initialization of 'BR2::AtlasSprite'");
  output.appendLine("[build]                             _Up(std::forward<_Args>(__args)...)))");
  output.appendLine("[build]                             ^   ~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  output.appendLine("[build] /bin/../lib/gcc/x86_64-linux-gnu/9/../../../../include/c++/9/bits/alloc_traits.h:483:24: note: in instantiation of exception specification for 'construct<BR2::AtlasSprite, std::shared_ptr<BR2::Atlas> >' requested here");
  output.appendLine("[build]         noexcept(noexcept(__a.construct(__p, std::forward<_Args>(__args)...)))");

}

export function activate(context: vscode.ExtensionContext) {
  const output = vscode.window.createOutputChannel("C/C++ Interactive Output Errors");

  const disposable = vscode.commands.registerCommand('extension.interactive_output_c_cpp', () => {
    //Disable.
    printTest(output);

    vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      if (
        !editor.document.fileName.match("extension-output.*interactive_output_c_cpp.*") &&
        !editor.document.fileName.match("extension-output-ms-vscode.cmake-tools.*")) {
        return;
      }

      //We are getting multiple selection events with just one click.
      //Wait  ms between clicks
      if (can_click == false) {
        return;
      }
      can_click = false;
      setTimeout(() => {
        can_click = true;
      }, 500);

      if (e.selections.length == 1) {
        const selection = e.selections[0];
        const linesel = selection.end.line - selection.start.line;
        if (linesel == 0 && selection.start.line > 0 && selection.start.line < editor.document.lineCount) {
          const strline = editor.document.lineAt(selection.start.line).text;

          parseClickedLine(strline);
        }
      }
    });
  });
}
function parseClickedLine(strline: string) {
  //Hack hack hack.. 
  //If the navigation doesn't work, we need to match another format.
  //Clang and GCC tend to spit out files similar to this format.
  //[build] /usr/include/c++/9/debug/map.h:290:48
  //[build] In file included from ../src/gfx/../base/../base/GlobalIncludes.h:20:
  const type1 = strline.match("\\[build\\]\\s+(.*\\.(?:h|hpp|c|cpp|hxx|cxx))\\:([0-9]+)\\:([0-9]+)\\:.*");
  //[build]                  from /usr/include/c++/9/map:67
  //[build] In file included from ../src/gfx/Atlas.cpp:7:
  const type2 = strline.match("\\[build\\]\\s+.*\\s+(.*\\.(?:h|hpp|c|cpp|hxx|cxx))\\:([0-9]+).*");

  //Might be better to do some kind of flood fill search for the filename.

  if (type1 && type1.length == 4) {
    let match_file = type1[1];
    let match_line = parseInt(type1[2]);
    let match_char = parseInt(type1[3]);

    findAndOpenFileInWorkspace(match_file, match_line, match_char);
  }
  else if (type2 && type2.length == 3) {
    let match_file = type2[1];
    let match_line = parseInt(type2[2]);

    findAndOpenFileInWorkspace(match_file, match_line, -1);
  }
  // else if (type3 && type3.length == 2) {
  //   let match_file = type3[1];

  //   findAndOpenFileInWorkspace(match_file, -1, -1);
  // }
}
function findAndOpenFileInWorkspace(file_path: string, line_num: number = -1, char_num: number = -1) {
  //This is a really bad method of finding a file here. It can be improved.
  if (line_num == 0) {
    line_num = 1;
  }
  if (char_num == 0) {
    char_num = 1;
  }

  let rootfolder = "";
  if(vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0]){
    rootfolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
  }
  let pat = new vscode.RelativePattern(rootfolder, "**/" + path.basename(file_path));
  let debgstr = pat.pattern.toString();

  vscode.workspace.findFiles(pat).then((paths: vscode.Uri[]) => {
    let file_uri = null;

    if (paths.length == 1) {
      file_uri = paths[0];
    }
    else if (paths.length > 1) {
      //multiple files found.
      //we should resolve it best case
      file_uri = paths[0];
    } 
    else {
      if (!path.isAbsolute(file_path)) {
        return;
      }
      try{
        file_uri = vscode.Uri.parse("file://"+file_path);
      }
      catch(e){
        console.error(e);
        return;
      }
    }

    //Using raw URI's was converting characters to html escape sequences which wasn't being interpreted by openTextDocument
    vscode.workspace.openTextDocument(file_uri).then((doc: vscode.TextDocument) => {
      let int_line = -1;
      let int_char = -1;

      if (line_num < 0) {
        int_line = 1;
        int_char = 1;
      }
      else if (char_num < 0) {
        int_line = line_num;
        int_char = 1;
      }
      else {
        int_line = line_num;
        int_char = char_num;
      }

      const pos = new vscode.Position(int_line - 1, int_char - 1);
      const range = new vscode.Range(pos, pos);
      const opts: vscode.TextDocumentShowOptions = {
        selection: range,
        viewColumn: vscode.ViewColumn.Active,
        preserveFocus: false,
        preview: true,
      };

      vscode.window.showTextDocument(doc, opts);
    }, (error: any) => {
      console.error(error);
    });//opentextdocument

  }, (error: any) => {
    console.error(error);
  });//findfiles
}