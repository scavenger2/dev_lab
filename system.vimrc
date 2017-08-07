" inspired by https://keeliii.github.io/2016/06/13/awsome-window-vimrc/
" Startup {{{
filetype indent plugin on
autocmd FileType javascript set omnifunc=javascriptcomplete
" }}}
" Lang &Encoding {{{
set fileencodings=utf-8
set encoding=utf-8
set langmenu=zh_CN
let $LANG = 'en_US.UTF-8'
" }}}
" Format {{{
set autoindent
set smartindent
set tabstop=4
set shiftwidth=4
set expandtab
set softtabstop=4
set foldenable
set foldmethod=indent
set foldcolumn=1
set hls
set ic
set nu
set cursorline
set cursorcolumn
syntax on
hi LineNr cterm=bold ctermfg=DarkGrey ctermbg=NONE
hi CursorLineNr cterm=bold ctermfg=Green ctermbg=NONE
" }}}
" General {{{
set nobackup
set noswapfile
set mouse=""
set history=1024
set autoread
set autochdir
set whichwrap=b,s,<,>,[,]
set nobomb
set backspace=indent,eol,start whichwrap+=<,>,[,]
set clipboard+=unnamed " you can paste the content you copied from else where
set winaltkeys=no

set dictionary+=/usr/share/dict/words
set completeopt-=preview
" }}}
" Keymap {{{
let mapleader=","
"for editing configuration file
nmap <leader>s :source $VIM/.vimrc<cr> 
"for reloading configuration file
nmap <leader>e :e $VIM/.vimrc<cr> 

noremap x "_x
" }}}
" Function {{{
" }}}
" Plugin {{{
call plug#begin('~/.vim/plugged')
Plug 'Valloric/YouCompleteMe'
Plug 'ternjs/tern_for_vim'
Plug 'Raimondi/delimitMate'
Plug 'xml.vim'
Plug 'json.vim'
call plug#end()
" }}}
