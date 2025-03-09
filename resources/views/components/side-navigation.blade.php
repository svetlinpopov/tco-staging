<div class="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
    <div class="flex flex-col items-center space-y-2">
        @for ($i = 1; $i <= 10; $i++)
            <a href="#section{{ $i }}"
               class="side-nav-dot w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 hover:bg-white"
               data-section="{{ $i }}">
                <span class="sr-only">Section {{ $i }}</span>
            </a>
        @endfor
    </div>
</div>
