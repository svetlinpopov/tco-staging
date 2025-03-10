@props(['sections' => 10])

<nav class="side-nav">
    @for ($i = 1; $i <= $sections; $i++)
        <a href="#section{{ $i }}"
           class="side-nav-dot"
           data-section="{{ $i }}"
           aria-label="Navigate to section {{ $i }}">
            <span class="sr-only">Section {{ $i }}</span>
        </a>
    @endfor
</nav>
